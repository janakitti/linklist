import styled from "styled-components";
import Kebab from "../../../../icons/kebab";

const LinkItem = ({ _id, label, url, setModalShow, setSelectedLink }) => {
  return (
    <div className="item">
      <Content>
        {label}
        <div
          className="kebab"
          onClick={async () => {
            await setSelectedLink({
              id: _id,
              label,
              url,
            });
            setModalShow(true);
          }}
        >
          <Kebab />
        </div>
      </Content>
    </div>
  );
};

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  flex-direction: row;
`;

export default LinkItem;
