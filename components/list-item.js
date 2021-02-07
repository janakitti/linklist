import styled from "styled-components";
import { useEffect, useState } from "react";

const ListItem = ({ _id, name, handleSelect, selected }) => {
  const toggleSelected = () => {
    handleSelect(_id, name);
  };

  return (
    <Item onClick={toggleSelected} selected={selected === _id}>
      {name}
    </Item>
  );
};

const Item = styled.div`
  width: 100%;
  height: 88px;

  margin: 1em 0;
  padding: 1em 2em;

  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;

  background: #373737;
  box-shadow: 4px 4px 24px rgba(0, 0, 0, 0.15);
  border-radius: 20px;

  color: white;
  font-family: Poppins;

  ${({ selected }) =>
    selected &&
    `
        background: #DEC800;
    `}
`;

export default ListItem;
