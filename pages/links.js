import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListsPanel from "../components/lists-panel";
import LinksWindow from "../components/links-window";
import ListDetailPanel from "../components/list-detail-panel/list-detail-panel";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Links() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    lists: [""],
  });
  const [lists, setLists] = useState([]);
  const [selected, setSelected] = useState({
    data: {
      _id: "",
      name: "",
      owner: "",
      links: [],
      publicListId: "",
      isPublished: "",
    },
    index: 0,
  });

  useEffect(async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/users/me", {
        method: "get",
        withCredentials: true,
      });
      setUser(res.data);
    } catch (ex) {
      console.log(ex);
    }
  }, []);

  const handleSelect = (list, index) => {
    setSelected({
      data: list,
      index,
    });
  };

  useEffect(() => {
    console.log(selected);
  }, [selected]);

  const fetchLists = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/lists", {
        method: "get",
        withCredentials: true,
      });
      await setLists(res.data);
    } catch (ex) {
      console.log(ex);
    }
  };

  const fetchListsAndSetList = async (res, index) => {
    console.log(res);
    handleSelect(res, index);
    setLists((prevLists) => {
      prevLists[index] = res;
      return prevLists;
    });
  };

  return (
    <FullRow>
      <FullCol xs={3}>
        <ListsPanel
          user={user}
          selected={selected}
          handleSelect={handleSelect}
          lists={lists}
          fetchLists={fetchLists}
        />
      </FullCol>
      <FullCol xs={6}>
        <LinksWindow selected={selected} />
      </FullCol>
      <FullCol xs={3}>
        <ListDetailPanel
          selected={selected}
          fetchListsAndSetList={fetchListsAndSetList}
        />
      </FullCol>
    </FullRow>
  );
}

const FullCol = styled(Col)`
  height: 100%;
  width: 100%;
  padding: 0;
`;

const FullRow = styled(Row)`
  height: 100%;
  width: 100%;
  margin: 0;
`;
