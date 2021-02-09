import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PublicLinkItem from "../components/public-link-item/public-link-item";
import axios from "axios";
import styled from "styled-components";

const PublicList = () => {
  const router = useRouter();
  const { id } = router.query;
  const [list, setList] = useState({
    _id: "",
    name: "",
    links: [],
  });

  useEffect(async () => {
    try {
      if (id) {
        const res = await axios.get("http://localhost:4000/api/l/" + id);
        setList(res.data);
      }
    } catch (ex) {
      console.log(ex);
    }
  }, [id]);

  const linkItems = list.links.map((link, idx) => (
    <PublicLinkItem
      key={idx}
      _id={link._id}
      label={link.label}
      url={link.url}
    />
  ));

  return (
    <FullRow>
      <FullCol xs={12} md={6}>
        <Profile>
          <Name>{list.name}</Name>
        </Profile>
        <Window>{linkItems}</Window>
      </FullCol>
    </FullRow>
  );
};

const FullCol = styled(Col)`
  height: 100%;
  width: 100%;
  padding: 0;
  justify-content: center;
`;

const FullRow = styled(Row)`
  height: 100%;
  width: 100%;
  margin: 0;
  justify-content: center;
`;

const Window = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 3em 0 3em;
  overflow-y: scroll;
`;

const Profile = styled.div`
  display: flex;
  justify-content: center;

  padding: 3em 0;
`;

const Name = styled.h1`
  font-family: Poppins;
  font-weight: 700;
  font-size: 2em;
`;

export default PublicList;
