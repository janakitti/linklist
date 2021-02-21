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
import { Provider } from "react-redux";
import store from "../redux/store";

export default function Links() {
  const [errorModalShow, setErrorModalShow] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [user, setUser] = useState({
    username: "",
    email: "",
    lists: [""],
  });
  const [lists, setLists] = useState([]);
  const [selected, setSelected] = useState({
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

  const handleSelect = (list, index) => {
    setSelected({
      data: list,
      index,
    });
  };

  const handleSelectAfterDelete = async (index) => {
    if (lists.length > 1) {
      if (index > 0) {
        setSelected({
          data: lists[index - 1],
          index: index - 1,
        });
      } else {
        setSelected({
          data: lists[index + 1],
          index: index + 1,
        });
      }
    } else {
      setSelected({
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

  useEffect(() => {
    console.log(selected);
  }, [selected]);

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

  const fetchListsAndSetList = async (res, index) => {
    console.log(res);
    handleSelect(res, index);
    setLists((prevLists) => {
      prevLists[index] = res;
      return prevLists;
    });
  };

  const onHide = () => {
    setErrorModalShow(false);
  };

  const showErrorModal = (msg) => {
    setErrorMsg(msg);
    setErrorModalShow(true);
  };

  return (
    <Provider store={store}>
      <FullRow>
        <FullCol xs={3}>
          <ListsPanel
            user={user}
            selected={selected}
            handleSelect={handleSelect}
            lists={lists}
            fetchLists={fetchLists}
          />
        </FullCol>
        <FullCol xs={6}>
          <LinksWindow
            selected={selected}
            showErrorModal={showErrorModal}
            listsLength={lists.length}
          />
        </FullCol>
        <FullCol xs={3}>
          <ListDetailPanel
            selected={selected}
            fetchListsAndSetList={fetchListsAndSetList}
            handleSelectAfterDelete={handleSelectAfterDelete}
          />
        </FullCol>
        <ErrorModal show={errorModalShow} onHide={onHide} errorMsg={errorMsg} />
      </FullRow>
    </Provider>
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
