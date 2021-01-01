import styled from 'styled-components';
import WelcomeLayout from './welcome-layout';
import {useState} from "react";
import axios from 'axios';

export default function SignIn() {

    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    
    function handleChange(event) {
        const {name, value} = event.target;
        setUser({ ...user, [name]: value });
        console.log(user);
    }

    async function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <WelcomeLayout>
            <Container>
                <Title>
                    linklist
                </Title>
                <Subtitle>
                    Sign in for better bookmarking
                </Subtitle>
                <form onSubmit={handleSubmit}>
                    <Input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange}></Input>
                    <Input type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange}></Input>
                    <Button type="submit">Sign in</Button>
                </form>
            </Container>
        </WelcomeLayout>
    )
}

const Container = styled.div`
    position: relative;
    align-items: center;
    text-align: center;
    top: -10em;
`;

const Title = styled.h1`
    font-family: Poppins;
    font-weight: 700;
    font-size: 2em;
`;

const Subtitle = styled.h2`
    font-family: Poppins;
    font-weight: 300;
    font-size: 1em;

    margin: 0 0 2em 0;
`;

const Input = styled.input`
    width: 30em;
    height: 3em;

    padding: 0 2em;
    margin: 0.5em 0;

    background: #FFFFFF;
    border: none;
    border-radius: 56.5px;
`;

const Button = styled.button`
    width: 30em;
    height: 3em;

    padding: 0 2em;
    margin: 0.5em 0;

    background: #DEC800;
    box-shadow: 4px 4px 24px rgba(0, 0, 0, 0.15);
    border: none;
    border-radius: 56.5px;

    color: #FFFFFF;
    font-family: Poppins;
    font-weight: 300;
    font-size: 1em;
`;