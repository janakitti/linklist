import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const WelcomeLayout = (props) => (
  <WelcomeRow>
    <Col className="d-none d-lg-block" lg={6}>
      Hello
    </Col>
    <PanelCol xs={12} lg={6}>
      {props.children}
    </PanelCol>
  </WelcomeRow>
);

const PanelCol = styled(Col)`
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WelcomeRow = styled(Row)`
  height: 100%;
  width: 100%;
  margin: 0;
`;

export default WelcomeLayout;
