import { useState, useEffect } from "react";
import LinkItem from "./link-item";
import styled from "styled-components";
import axios from "axios";

const LinksWindow = ({ selected }) => {
  const [links, setLinks] = useState([]);

  useEffect(async () => {
    try {
      const res = await axios.get(
        "http://localhost:4000/api/links/" + selected,
        {
          method: "get",
          withCredentials: true,
        }
      );
      setLinks(res.data);
    } catch (ex) {
      console.log(ex);
    }
  }, [selected]);

  const linkItems = links.map((link, idx) => (
    <LinkItem key={idx} _id={link._id} label={link.label} url={link.label} />
  ));

  return <Window>{linkItems}</Window>;
};

const Window = styled.div`
  height: 100%;
  padding: 3em 2em;
`;

export default LinksWindow;
