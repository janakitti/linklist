import styled from "styled-components";

const PublicLinkItem = ({ _id, label, url }) => {
  return (
    <a href={url} target="_blank">
      <Item>
        <Content>{label}</Content>
      </Item>
    </a>
  );
};

const Item = styled.div`
  width: 100%;
  height: 88px;

  margin: 1em 0;
  padding: 1em 2em;

  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;

  background: #373737;
  box-shadow: 4px 4px 24px rgba(0, 0, 0, 0.15);
  border-radius: 20px;

  color: white;
  font-family: Poppins;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  flex-direction: row;
`;

export default PublicLinkItem;
