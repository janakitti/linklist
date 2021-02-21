import styled from "styled-components";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import axios from "axios";
import Image from "next/image";
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";
import DeleteListModal from "../delete-list-modal";
import { useDispatch, useSelector } from "react-redux";

const ListDetailPanel = ({
  selected,
  fetchListsAndSetList,
  handleSelectAfterDelete,
}) => {
  const [isPublishing, setIsPublishing] = useState(false);
  const [isPublished, setIsPublished] = useState(false);
  const [publicLink, setPublicLink] = useState("");
  const [state, setState] = useState({
    open: false,
    Transition: Slide,
  });
  const [modalShow, setModalShow] = useState(false);
  const user = useSelector((state) => state.user);

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  useEffect(() => {
    setPublicLink(selected.data.publicListId ? selected.data.publicListId : "");
    setIsPublished(!!selected.data.publicListId);
    console.log(!!selected.data.publicListId);
  }, [selected.data.publicListId]);

  const publish = async () => {
    setIsPublishing(true);
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
          await fetchListsAndSetList(res.data.privateList, selected.index);
          console.log(res);
        }
      } catch (ex) {
        console.log(ex);
      }
    }
    setIsPublishing(false);
  };

  const onDelete = async (index) => {
    await handleSelectAfterDelete(index);
    onHide();
  };

  const onHide = async () => {
    setModalShow(false);
  };

  const copyPublicLink = () => {
    navigator.clipboard.writeText(publicLink);
    setState({
      ...state,
      open: true,
    });
  };

  return (
    <Panel>
      <Profile>
        <Name>{selected.data.name}</Name>
        <div>{selected.data.isPublished}</div>
      </Profile>
      <div id="publish-container">
        {selected.data._id ? (
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
        {selected.data._id ? (
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
              onClick={() => setModalShow(true)}
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
        open={state.open}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        message="Copied!"
        key={state.Transition.name}
        autoHideDuration={2000}
      />
      <DeleteListModal
        show={modalShow}
        onDelete={onDelete}
        list={selected}
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
