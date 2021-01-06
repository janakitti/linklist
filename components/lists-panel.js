import styled from "styled-components";
import { useEffect, useState } from 'react';
import axios from 'axios';
import ListItem from './list-item';
import Row from 'react-bootstrap/Row';
import Grid from '@material-ui/core/Grid';

const ListsPanel = ({username, lists, handleSelect, selected}) => {


    const listItems = lists.map((list, idx) => <ListItem key={idx} _id={list._id} name={list.name} handleSelect={handleSelect} selected={selected} />);

    return(
        <Panel>
                <Profile>
                    <Name>{username}</Name>
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

export default ListsPanel;
