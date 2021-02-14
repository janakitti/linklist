import { useState, useEffect } from "react";
import LinkItem from "./link-item/link-item";
import EditLinkModal from "./edit-link-modal";
import styled from "styled-components";
import axios from "axios";

const LinksWindow = ({ selected, showErrorModal }) => {
  const [modalShow, setModalShow] = useState(false);
  const [links, setLinks] = useState([]);
  const [selectedLink, setSelectedLink] = useState({
    id: "",
    label: "",
    url: "",
  });
  const [newLink, setNewLink] = useState({
    label: "",
    url: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNewLink({ ...newLink, [name]: value });
  }

  useEffect(async () => {
    fetchLinks();
  }, [selected]);

  const fetchLinks = async () => {
    try {
      if (selected.data._id) {
        const res = await axios.get(
          "http://localhost:4000/api/links/" + selected.data._id,
          {
            method: "get",
            withCredentials: true,
          }
        );
        setLinks(res.data);
      } else {
        setLinks([]);
      }
    } catch (ex) {
      console.log(ex);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (newLink.label?.length < 5) {
      showErrorModal(
        "Your link label has got to be at least 5 characters long!"
      );
      return;
    }
    try {
      const res = await axios.post(
        "http://localhost:4000/api/links/" + selected.data._id,
        newLink,
        {
          withCredentials: true,
        }
      );
      console.log(res);
      setNewLink({ label: "", url: "" });
      fetchLinks();
    } catch (ex) {
      console.log(ex);
    }
  };

  const onHide = async (id, name) => {
    setModalShow(false);
  };

  const linkItems = links.map((link, idx) => (
    <LinkItem
      key={idx}
      _id={link._id}
      label={link.label}
      url={link.url}
      setModalShow={setModalShow}
      setSelectedLink={setSelectedLink}
    />
  ));

  return (
    <Window>
      {linkItems}
      <NewLinkContainer onSubmit={handleSubmit}>
        <Input
          type="text"
          name="label"
          placeholder="Label"
          value={newLink.label}
          onChange={handleChange}
        ></Input>
        <Input
          type="text"
          name="url"
          placeholder="URL"
          value={newLink.url}
          onChange={handleChange}
        ></Input>
        <Button type="submit">+</Button>
      </NewLinkContainer>
      <EditLinkModal
        show={modalShow}
        onHide={onHide}
        selectedLink={selectedLink}
        fetchLinks={fetchLinks}
      />
    </Window>
  );
};

const Window = styled.div`
  height: 100%;
  width: 100%;
  padding: 3em;
  overflow-y: scroll;
`;

const NewLinkContainer = styled.form`
  display: flex;
  justify-content: space-between;
`;

const Input = styled.input`
  flex-grow: 4;
  height: 3em;

  padding: 0 2em;
  margin: 0.5em 1em 0.5em 0;

  background-color: #f2f2f2;
  border: none;
  border-radius: 56.5px;
`;

const Button = styled.button`
  width: 5em;
  height: 3em;

  padding: 0 2em;
  margin: 0.5em 0;

  background: #dec800;
  box-shadow: 4px 4px 24px rgba(0, 0, 0, 0.15);
  border: none;
  border-radius: 56.5px;

  color: #ffffff;
  font-family: Poppins;
  font-weight: 300;
  font-size: 1em;
`;

export default LinksWindow;
