import styled from "styled-components";
import { useEffect, useState } from "react";

const ListItem = ({ list, handleSelect, selected, index }) => {
  const toggleSelected = () => {
    handleSelect(list, index);
  };

  // useEffect(() => {
  //   console.log(selected._id);
  //   console.log(list._id);
  // }, [list, selected]);
  return (
    <Item
      className="list-item"
      onClick={toggleSelected}
      selected={selected.data._id === list._id}
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
