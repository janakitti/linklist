import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

const ListDetailPanel = ({ selected, fetchListsAndSetList }) => {
  const publish = async () => {
    console.log(selected);
    if (selected.data.publicListId) {
      try {
        if (selected) {
          const res = await axios.put(
            "http://localhost:4000/api/l/" + selected.data._id,
            {},
            {
              method: "put",
              withCredentials: true,
            }
          );
        }
      } catch (ex) {
        console.log(ex);
      }
    } else {
      try {
        if (selected) {
          const res = await axios.post(
            "http://localhost:4000/api/l/" + selected.data._id,
            {},
            {
              method: "post",
              withCredentials: true,
            }
          );
          fetchListsAndSetList(res.data.privateList, selected.index);
          console.log(res);
        }
      } catch (ex) {
        console.log(ex);
      }
    }
  };

  return (
    <Panel>
      <Profile>
        <Name>{selected.data.name}</Name>
        <div>{selected.data.isPublished}</div>
        <button type="submit" onClick={publish} className="dark-button-auto">
          Publish
        </button>
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
