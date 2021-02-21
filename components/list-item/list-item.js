import styled from "styled-components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedIndex } from "../../redux/actions";

const ListItem = ({ listName, handleSelect, selectedIndex, index }) => {
  const dispatch = useDispatch();
  const toggleSelected = () => {
    dispatch(setSelectedIndex(index));
  };

  return (
    <Item
      className="list-item"
      onClick={toggleSelected}
      selected={selectedIndex === index}
    >
      {listName}
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
