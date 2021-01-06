import styled from "styled-components";
import { useEffect, useState } from 'react';
import axios from 'axios';
import ListItem from './list-item';
import Row from 'react-bootstrap/Row';
import Grid from '@material-ui/core/Grid';

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
                <Profile>
                    <Name>{user.username}</Name>
                </Profile>
                <div>
                    {listItems}
                </div>
        </Panel>
    )
}

const Profile = styled.div`
    display: flex;  
    justify-content: center;
    
    padding: 3em 0;
`;

const Panel = styled.div`
    background-color: #f2f2f2;
    height: 100%;
    padding: 3em 2em;
`;

const Name = styled.h1`
    font-family: Poppins;
    font-weight: 700;
    font-size: 2em;
`;
