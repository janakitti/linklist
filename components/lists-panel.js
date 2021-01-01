import styled from "styled-components";


export default function ListsPanel() {
    return(
        <Panel>
            <Name>janakitti</Name>
        </Panel>
    )
}

const Panel = styled.div`
    background-color: #f2f2f2;
    height: 100%;
    padding: 3em 2em;
    display: flex;
    justify-content: center;
    
`;

const Name = styled.h1`
    font-family: Poppins;
    font-weight: 700;
    font-size: 2em;
`;