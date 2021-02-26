import styled from "styled-components";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import axios from "axios";
import Image from "next/image";
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";
import DeleteListModal from "../delete-list-modal";
import { useSelector } from "react-redux";

const ListDetailPanel = ({ fetchListsAndSetList, handleSelectAfterDelete }) => {
  // Public link publishing states
  const [isPublishing, setIsPublishing] = useState(false); // For loading spinner
  const [isPublished, setIsPublished] = useState(false); // For graphic display
  const [publicLink, setPublicLink] = useState("");

  // List states
  const lists = useSelector((state) => state.lists.lists);
  const selectedListIndex = useSelector((state) => state.lists.selectedIndex);
  const selectedList = lists[selectedListIndex]
    ? lists[selectedListIndex]
    : {
        isPublished: false,
        links: [],
        name: "",
        _id: "",
      };

  useEffect(() => {
    setPublicLink(selectedList.publicListId ? selectedList.publicListId : "");
    setIsPublished(!!selectedList.publicListId);
    console.log(!!selectedList.publicListId);
  }, [selectedList.publicListId]);

  const publish = async () => {
    setIsPublishing(true);
    if (selectedList.publicListId) {
      try {
        if (selectedList) {
          const res = await axios.put(
            "http://localhost:4000/api/l/" + selectedList._id,
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
        if (selectedList) {
          const res = await axios.post(
            "http://localhost:4000/api/l/" + selectedList._id,
            {},
            {
              method: "post",
              withCredentials: true,
            }
          );
          await fetchListsAndSetList(res.data.privateList, selectedListIndex);
          console.log(res);
        }
      } catch (ex) {
        console.log(ex);
      }
    }
    setIsPublishing(false);
  };

  // Copy public link
  const [snackbarState, setSnackbarState] = useState({
    open: false,
    Transition: Slide,
  });
  const copyPublicLink = () => {
    navigator.clipboard.writeText(publicLink);
    setSnackbarState({
      ...snackbarState,
      open: true,
    });
  };
  const handleClose = () => {
    setSnackbarState({
      ...snackbarState,
      open: false,
    });
  };

  // Delete list modal
  const [deleteListModalShow, setDeleteListModalShow] = useState(false);
  const onDelete = async () => {
    await handleSelectAfterDelete(selectedListIndex);
    onHide();
  };
  const onHide = async () => {
    setDeleteListModalShow(false);
  };

  return (
    <Panel>
      <Profile>
        <Name>{selectedList.name}</Name>
        <div>{selectedList.isPublished}</div>
      </Profile>
      <div id="publish-container">
        {selectedList._id ? (
          isPublishing ? (
            <Spinner animation="border" id="spinner" />
          ) : isPublished ? (
            <Image
              src="/published.svg"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          ) : (
            <Image
              src="/publishing.svg"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          )
        ) : (
          <Image
            src="/empty.svg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        )}
      </div>
      <>
        {selectedList._id ? (
          <>
            <button
              type="submit"
              onClick={publish}
              className="dark-button-auto"
            >
              Publish
            </button>
            <input
              className="text-input-publish"
              type="text"
              name="name"
              placeholder="Public Link"
              value={publicLink}
              readOnly
              onClick={copyPublicLink}
            ></input>
            <button
              type="submit"
              onClick={() => setDeleteListModalShow(true)}
              className="delete-button-auto"
            >
              Delete
            </button>{" "}
          </>
        ) : (
          <h2 className="h-hint">Hm, it's a little empty here...</h2>
        )}
      </>

      <Snackbar
        open={snackbarState.open}
        onClose={handleClose}
        TransitionComponent={snackbarState.Transition}
        message="Copied!"
        key={snackbarState.Transition.name}
        autoHideDuration={2000}
      />
      <DeleteListModal
        show={deleteListModalShow}
        onDelete={onDelete}
        list={selectedList}
        onHide={onHide}
      />
    </Panel>
  );
};

const Profile = styled.div`
  display: flex;
  justify-content: center;

  padding: 3em 0 0 0;
`;

const Panel = styled.div`
  background-color: #f2f2f2;
  height: 100%;
  padding: 3em 2em;

  display: flex;
  align-content: center;
  flex-direction: column;
`;

const Name = styled.h1`
  font-family: Poppins;
  font-weight: 700;
  font-size: 2em;
`;

export default ListDetailPanel;
