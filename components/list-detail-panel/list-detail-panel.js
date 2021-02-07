import styled from "styled-components";
import { useEffect, useState } from "react";

const ListDetailPanel = ({ selected }) => {
  return (
    <Panel>
      <Profile>
        <Name>{selected.name}</Name>
      </Profile>
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

export default ListDetailPanel;
