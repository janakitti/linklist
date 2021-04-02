import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListsPanel from "../components/lists-panel";
import LinksWindow from "../components/links-window/links-window";
import ListDetailPanel from "../components/list-detail-panel/list-detail-panel";
import ErrorModal from "../components/error-modal";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  setLists,
  setSelectedIndex,
  setErrorModalShow,
} from "../redux/actions";
import api from "../utils/api";

export default function DashboardPage() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    lists: [""],
  });
  const lists = useSelector((state) => state.lists.lists);
  const dispatch = useDispatch();

  // Fetch User data on mount
  useEffect(async () => {
    try {
      const res = await api.get("/users/me", {
        method: "get",
        withCredentials: true,
      });
      setUser(res.data);
    } catch (ex) {
      console.log(ex);
    }
  }, []);

  const handleSelect = (index) => {
    dispatch(setSelectedIndex(index));
  };

  // Logic for selecting the next list after current is deleted
  const handleSelectAfterDelete = async (index) => {
    if (lists.length > 1) {
      if (index > 0) {
        dispatch(setSelectedIndex(index - 1));
      } else {
        dispatch(setSelectedIndex(index));
      }
    } else {
      dispatch(setSelectedIndex(0));
    }
    await fetchLists();
  };

  const fetchLists = async () => {
    try {
      const res = await api.get("/lists", {
        method: "get",
        withCredentials: true,
      });
      dispatch(setLists(res.data));
    } catch (ex) {
      console.log(ex);
    }
  };

  // Fetch and select a specified list by index
  const fetchListsAndSetList = async (res, index) => {
    console.log(res);
    lists[index] = res;
    dispatch(setLists(lists));
    dispatch(setSelectedIndex(index));
  };

  // Global error modal
  const errorMsg = useSelector((state) => state.error.msg);
  const errorModalShow = useSelector((state) => state.error.isShowing);
  const onErrorModalHide = () => {
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
          handleSelect={handleSelect}
          fetchLists={fetchLists}
        />
      </FullCol>
      <FullCol xs={6}>
        <LinksWindow showErrorModal={showErrorModal} />
      </FullCol>
      <FullCol xs={3}>
        <ListDetailPanel
          fetchListsAndSetList={fetchListsAndSetList}
          handleSelectAfterDelete={handleSelectAfterDelete}
        />
      </FullCol>
      <ErrorModal
        show={errorModalShow}
        onHide={() => dispatch(setErrorModalShow(false))}
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
