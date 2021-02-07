import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const EditLinkModal = (props) => {
  const [newList, setNewList] = useState("");
  const [editedLink, setEditedLink] = useState({
    label: "",
    url: "",
  });

  useEffect(() => {
    setEditedLink(props.selected);
  }, [props.selected]);

  const handleChange = async (event) => {
    const { name, value } = event.target;
    setEditedLink({ ...editedLink, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const name = {
        name: newList,
      };
      const res = await axios.post("http://localhost:4000/api/lists", name, {
        withCredentials: true,
      });
      console.log(res);
      setNewList("");
      props.onHide(res.data._id, res.data.name);
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Title id="contained-modal-title-vcenter">Create new list</Title>
      </Modal.Header>
      <Modal.Body>
        <Input
          type="text"
          name="label"
          placeholder="Edit label"
          value={editedLink.label}
          onChange={handleChange}
        ></Input>
        <Input
          type="text"
          name="url"
          placeholder="Edit URL"
          value={editedLink.url}
          onChange={handleChange}
        ></Input>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSubmit}>Delete</Button>
        <Button onClick={handleSubmit}>Save Changes</Button>
      </Modal.Footer>
    </Modal>
  );
};

const Button = styled.button`
  width: auto;
  height: 3em;

  padding: 0 2em;
  margin: 0.5em 0 0 1em;

  background: #dec800;
  box-shadow: 4px 4px 24px rgba(0, 0, 0, 0.15);
  border: none;
  border-radius: 56.5px;

  color: #ffffff;
  font-family: Poppins;
  font-weight: 300;
  font-size: 1em;
`;

const Title = styled.h1`
  font-family: Poppins;
  font-weight: 700;
  font-size: 2em;
`;

const Input = styled.input`
  width: 100%;
  height: 3em;

  padding: 0 2em;
  margin: 0.5em 1em 0.5em 0;

  background-color: #f2f2f2;
  border: none;
  border-radius: 56.5px;
`;

export default EditLinkModal;
