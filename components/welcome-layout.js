import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const WelcomeLayout = (props) => (

        <WelcomeContainer>
            <Row>
                <Col>
                Hello
                </Col>
                <PanelCol>
                    { props.children }
                </PanelCol>
            </Row>
        </WelcomeContainer>

    
);


const WelcomeContainer = styled(Container)`
`;

const PanelCol = styled(Col)`
    background-color: #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default WelcomeLayout;