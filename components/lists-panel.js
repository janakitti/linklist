import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import ListItem from "./list-item/list-item";
import NewListModal from "./new-list-modal";

const ListsPanel = ({ user, selected, handleSelect, lists, fetchLists }) => {
  const [modalShow, setModalShow] = useState(false);

  useEffect(async () => {
    await fetchLists();
    if (lists.length != 0) {
      handleSelect(lists[0]);
    }
  }, [user.lists]);

  const onHide = async (list) => {
    setModalShow(false);
    await fetchLists();
    handleSelect(list);
  };

  const listItems = lists.map((list, idx) => (
    <ListItem
      key={idx}
      list={list}
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
