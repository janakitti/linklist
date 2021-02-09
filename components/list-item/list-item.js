import styled from "styled-components";
import { useEffect, useState } from "react";

const ListItem = ({ _id, name, handleSelect, selected }) => {
  const toggleSelected = () => {
    handleSelect(_id, name);
  };

  return (
    <Item
      className="list-item"
      onClick={toggleSelected}
      selected={selected === _id}
    >
      {name}
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
