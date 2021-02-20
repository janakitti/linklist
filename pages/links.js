import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListsPanel from "../components/lists-panel";
import LinksWindow from "../components/links-window/links-window";
import ListDetailPanel from "../components/list-detail-panel/list-detail-panel";
import ErrorModal from "../components/error-modal";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Links() {
  const [errorModalShow, setErrorModalShow] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [user, setUser] = useState({
    username: "",
    email: "",
    lists: [""],
  });
  const [lists, setLists] = useState([]);
  const [selectedList, setSelectedList] = useState({
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

  // Fetch user data
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

  const handleSelectedList = (list, index) => {
    setSelectedList({
      data: list,
      index,
    });
  };

  const handleSelectAfterDelete = async (index) => {
    if (lists.length > 1) {
      if (index > 0) {
        setSelectedList({
          data: lists[index - 1],
          index: index - 1,
        });
      } else {
        setSelectedList({
          data: lists[index + 1],
          index: index + 1,
        });
      }
    } else {
      setSelectedList({
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
    }
    await fetchLists();
  };

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

  // Refresh the lists and select one by index
  const fetchListsAndSetList = async (res, index) => {
    handleSelect(res, index);
    setLists((prevLists) => {
      prevLists[index] = res;
      return prevLists;
    });
  };

  const onHideErrorModal = () => {
    setErrorModalShow(false);
  };

  const showErrorModal = (msg) => {
    setErrorMsg(msg);
    setErrorModalShow(true);
  };

  return (
    <FullRow>
      <FullCol xs={3}>
        <ListsPanel
          user={user}
          selectedList={selectedList}
          handleSelect={handleSelectedList}
          lists={lists}
          fetchLists={fetchLists}
        />
      </FullCol>
      <FullCol xs={6}>
        <LinksWindow
          selected={selectedList}
          showErrorModal={showErrorModal}
          listsLength={lists.length}
        />
      </FullCol>
      <FullCol xs={3}>
        <ListDetailPanel
          selected={selectedList}
          fetchListsAndSetList={fetchListsAndSetList}
          handleSelectAfterDelete={handleSelectAfterDelete}
        />
      </FullCol>
      <ErrorModal
        show={errorModalShow}
        onHide={onHideErrorModal}
        errorMsg={errorMsg}
      />
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
