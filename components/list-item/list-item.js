import styled from "styled-components";
import { useEffect, useState } from "react";

const ListItem = ({ list, handleSelect, selected }) => {
  const toggleSelected = () => {
    handleSelect(list);
  };

  useEffect(() => {
    console.log(selected._id);
    console.log(list._id);
  }, []);
  return (
    <Item
      className="list-item"
      onClick={toggleSelected}
      selected={selected._id === list._id}
    >
      {list.name}
    </Item>
  );
};

const Item = styled.div`
  ${({ selected }) =>
    selected &&
    `
        background: #DEC800;
    `}
`;

export default ListItem;