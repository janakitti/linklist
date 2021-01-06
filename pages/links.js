import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListsPanel from '../components/lists-panel';
import LinksWindow from "../components/links-window";
import styled from "styled-components";
import {useEffect, useState} from "react";

export default function Links() {
    const [user, setUser] = useState({
        username: "",
        email: "",
        listsIds: ['o']
    });

    const [lists, setLists] = useState([]);

    const [selected, setSelected] = useState("");

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

    useEffect(async() => {
        fetch('lists-data.json', {
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => setLists(data))
            .catch(ex => console.log(ex));
    }, [user.listIds]);

    const handleSelect = (id) => {
        setSelected(id);
    }

    return(
        <FullRow>
            <FullCol xs={3}>
                <ListsPanel username={user.username} lists={lists} handleSelect={handleSelect} selected={selected}/>
            </FullCol>
            <FullCol xs={9}>
                <LinksWindow selected={selected}/>
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
