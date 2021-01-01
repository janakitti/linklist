import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const WelcomeLayout = (props) => (

        <WelcomeContainer>
            <WelcomeRow>
                <Col>
                Hello
                </Col>
                <PanelCol>
                    { props.children }
                </PanelCol>
            </WelcomeRow>
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

const WelcomeRow = styled(Row)`
    height: 100%;
`;


export default WelcomeLayout;