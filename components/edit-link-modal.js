import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const EditLinkModal = ({
  show,
  onHide,
  selectedLink,
  fetchLinks,
  showErrorModal,
}) => {
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
    if (editedLink.label?.length < 5) {
      showErrorModal(
        "Your link label has got to be at least 5 characters long!"
      );
      return;
    }
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
        <input
          className="text-input-modal"
          type="text"
          name="label"
          placeholder="Edit label"
          value={editedLink.label}
          onChange={handleChange}
        ></input>
        <input
          className="text-input-modal"
          type="text"
          name="url"
          placeholder="Edit URL"
          value={editedLink.url}
          onChange={handleChange}
        ></input>
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

export default EditLinkModal;
