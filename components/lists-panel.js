import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import ListItem from "./list-item/list-item";
import NewListModal from "./new-list-modal";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/actions";

const ListsPanel = ({ user, handleSelect, fetchLists }) => {
  const { lists, selectedIndex } = useSelector((state) => state.lists);
  const dispatch = useDispatch();

  useEffect(async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/users/me", {
        method: "get",
        withCredentials: true,
      });
      dispatch(setUser(res.data));
    } catch (ex) {
      console.log(ex);
    }
  }, []);

  useEffect(async () => {
    await fetchLists();
    if (lists.length != 0) {
      handleSelect(0);
    }
  }, [user.lists]);

  // New list modal
  const [newListModalShow, setNewListModalShow] = useState(false);
  const onAddNewList = async (list) => {
    onHide();
    await fetchLists();
    handleSelect(lists.length);
  };
  const onHide = async () => {
    setNewListModalShow(false);
  };

  const listItems = lists.map((list, idx) => (
    <ListItem
      key={idx}
      listName={list.name}
      handleSelect={handleSelect}
      selectedIndex={selectedIndex}
      index={idx}
    />
  ));

  return (
    <Panel>
      <Profile>
        <Name>{user.username}</Name>
      </Profile>
      <ListContainer>
        {listItems}
        <NewListItem onClick={() => setNewListModalShow(true)}>
          New list +
        </NewListItem>
      </ListContainer>

      <NewListModal
        show={newListModalShow}
        onAddNewList={onAddNewList}
        onHide={onHide}
      />
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
  height: 70vh;
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
