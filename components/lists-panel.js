import styled from "styled-components";
import { useEffect, useState } from 'react';
import axios from 'axios';
import ListItem from './list-item';
import Row from 'react-bootstrap/Row';

export default function ListsPanel() {
    const [user, setUser] = useState({
        username: "",
        email: "",
        lists: ['o']
    });

    const listItems = user.lists.map((list, idx) => <ListItem key={idx} name={list} />);

    useEffect(async () => {
        fetch('user-data.json', {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => setUser(data))
        .catch(ex => console.log(ex));
    }, []);

    return(
        <Panel>
            <Row>
                <Name>{user.username}</Name>
            </Row>
            <Row>
                <div>
                    {listItems}
                </div>
            </Row>   
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