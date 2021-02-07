import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import ListItem from "./list-item";
import Row from "react-bootstrap/Row";
import Grid from "@material-ui/core/Grid";
import NewListModal from "./new-list-modal";

const ListsPanel = ({ user, selected, handleSelect }) => {
  const [modalShow, setModalShow] = useState(false);
  const [lists, setLists] = useState([]);

  useEffect(async () => {
    await fetchLists();
    if (lists.length != 0) {
      handleSelect(lists[0]._id, lists[0].name);
    }
  }, [user.lists]);

  const fetchLists = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/lists", {
        method: "get",
        withCredentials: true,
      });
      setLists(res.data);
    } catch (ex) {
      console.log(ex);
    }
  };

  const onHide = async (id, name) => {
    setModalShow(false);
    await fetchLists();
    if (lists.length != 0) {
      handleSelect(id, name);
    }
  };

  const listItems = lists.map((list, idx) => (
    <ListItem
      key={idx}
      _id={list._id}
      name={list.name}
      handleSelect={handleSelect}
      selected={selected}
    />
  ));

  return (
    <Panel>
      <Profile>
        <Name>{user.username}</Name>
      </Profile>
      <ListContainer>
        {listItems}
        <NewListItem onClick={() => setModalShow(true)}>New list +</NewListItem>
      </ListContainer>

      <NewListModal show={modalShow} onHide={onHide} />
    </Panel>
  );
};

const Profile = styled.div`
  display: flex;
  justify-content: center;

  padding: 3em 0;
`;

const Panel = styled.div`
  background-color: #f2f2f2;
  height: 100%;
  padding: 3em 2em;
`;

const Name = styled.h1`
  font-family: Poppins;
  font-weight: 700;
  font-size: 2em;
`;

const ListContainer = styled.div`
  height: 30em;
  margin: 0 -2em;
  padding: 0 2em;
  overflow-y: scroll;
`;

const NewListItem = styled.div`
  width: 100%;
  height: 88px;

  margin: 1em 0;
  padding: 1em 2em;

  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;

  background: #f2f2f2;
  box-shadow: 4px 4px 24px rgba(0, 0, 0, 0.15);
  border-radius: 20px;

  color: #767676;
  font-family: Poppins;

  cursor: pointer;
`;

export default ListsPanel;
