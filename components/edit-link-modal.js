import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const EditLinkModal = ({ show, onHide, selectedLink, fetchLinks }) => {
  const [newList, setNewList] = useState("");
  const [editedLink, setEditedLink] = useState({
    label: "",
    url: "",
  });

  useEffect(() => {
    setEditedLink({
      label: selectedLink.label,
      url: selectedLink.url,
    });
  }, [selectedLink]);

  const handleChange = async (event) => {
    const { name, value } = event.target;
    setEditedLink({ ...editedLink, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  const handleDelete = async () => {
    try {
      const res = await axios.delete(
        "http://localhost:4000/api/links/" + selectedLink.id,
        {
          withCredentials: true,
        }
      );
      onHide();
      fetchLinks();
    } catch (ex) {
      console.log(ex);
    }
  };

  const handleEdit = async () => {
    try {
      const res = await axios.put(
        "http://localhost:4000/api/links/" + selectedLink.id,
        editedLink,
        {
          withCredentials: true,
        }
      );
      onHide();
      fetchLinks();
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
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
        <button onClick={handleDelete} className="delete-button-auto">
          Delete
        </button>
        <button onClick={handleEdit} className="primary-button-auto">
          Save Changes
        </button>
      </Modal.Footer>
    </Modal>
  );
};

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
