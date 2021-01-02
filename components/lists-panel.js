import styled from "styled-components";
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ListsPanel() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    useEffect(async () => {
        try {
            const res = await axios.get('http://localhost:4000/api/users/me', {
                method: "get",
                withCredentials: true
              });
            console.log('bru' + res);
        } catch (ex) {
            console.log(ex);      
        }

        // fetch('http://localhost:4000/api/users/me', {
        //     method: 'GET',
        //     headers: {
        //       'Authorization': 'Bearer' + document.cookie.jwt.token
        //     }
        //   })
        //   .then(res => res.json())
        //   .then(data => { console.log(data) })
        //   .catch(err => { console.log(err) })

        // fetch('http://localhost:4000/api/users/me', {
        //     credentials: 'include'
        // })
        //     .then(res => res.json())
        //     .then(data => setUser(data))
        //     .catch(ex => console.log(ex));
    }, []);

    return(
        <Panel>
            <Name>{user.name}</Name>
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