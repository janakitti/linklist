import styled from 'styled-components';
import WelcomeLayout from '../components/welcome-layout';
import {useState} from "react";

export default function SignUp() {

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        passwordConfirm: ''
    });
    
    function handleChange(event) {
        const {name, value} = event.target;
        setUser({ ...user, [name]: value });
        console.log(user);
    }

    function createUser(event) {
        fetch("http://localhost:4000/api/users", {
            crossDomain: true,
            "method": "POST",
            "headers": {
                "content-type": "application/json",
                "accept": "application/json"
            },
            "body": JSON.stringify({
                username: user.username,
                email: user.email,
                password: user.password
            })
            })
            .then(response => response.json())
            .then(response => {
            console.log(response)
            })
            .catch(err => {
            console.log(err);
        });
    }

    return (
        <WelcomeLayout>
            <Container>
                <Title>
                    linklist
                </Title>
                <Subtitle>
                    Sign up for better bookmarking
                </Subtitle>
                <form>
                    <Input type="text" name="username" placeholder="Username" value={user.username} onChange={handleChange}></Input>
                    <Input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange}></Input>
                    <Input type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange}></Input>
                    <Input type="password" name="passwordConfirm" placeholder="Confirm password" value={user.passwordConfirm} onChange={handleChange}></Input>
                </form>
                <Button name="signUp" onClick={createUser}>Sign up</Button>
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