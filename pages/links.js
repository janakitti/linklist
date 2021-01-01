import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListsPanel from '../components/lists-panel';
import styled from "styled-components";

export default function Links() {
    return(
        <FullRow>
            <FullCol xs={3}>
                <ListsPanel />
            </FullCol>
            <FullCol xs={9}>
            </FullCol>
        </FullRow>
    )
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