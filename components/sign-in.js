import styled from 'styled-components';
import WelcomeLayout from './welcome-layout';
import {useState} from "react";
import axios from 'axios';
import { Router, useRouter } from "next/router";

const SignIn = ({setState}) => {
    const router = useRouter();
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

        const creds = {
            email: user.email,
            password: user.password
        };

        try {
            await axios.post('http://localhost:4000/api/auth/', creds, {
                withCredentials: true
            });
            router.push("/links");
        } catch (ex) {
            console.log(ex);
        }
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
                <Info>Don't have an account? <b onClick={() => setState("SignUp")}>Sign up</b></Info>
            </Container>
        </WelcomeLayout>
    )
}

const Info = styled.p`
    margin: 2em 0 0 0;

    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    text-align: center;

    color: #767676;

    cursor: pointer;
`;

const Container = styled.div`
    position: relative;
    align-items: center;
    text-align: center;
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

export default SignIn;