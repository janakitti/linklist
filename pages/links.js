import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListsPanel from "../components/lists-panel";
import LinksWindow from "../components/links-window";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Links() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    listsIds: ["o"],
  });

  const [lists, setLists] = useState([]);

  const [selected, setSelected] = useState("");

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

  useEffect(async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/lists", {
        method: "get",
        withCredentials: true,
      });
      setLists(res.data);
    } catch (ex) {
      console.log(ex);
    }
  }, [user.listIds]);

  const handleSelect = (id) => {
    setSelected(id);
  };

  return (
    <FullRow>
      <ListsPanel
        username={user.username}
        lists={lists}
        handleSelect={handleSelect}
        selected={selected}
      />
      <LinksWindow selected={selected} />
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
