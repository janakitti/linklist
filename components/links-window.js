import {useState, useEffect} from "react";
import LinkItem from './link-item';
import styled from 'styled-components';

const LinksWindow = (selected) => {
    const [links, setLinks] = useState([]);

    useEffect(async () => {
        fetch('links-data.json', {
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => setLinks(data))
            .catch(ex => console.log(ex));
    }, [selected]);

    const linkItems = links.map((link, idx) => <LinkItem key={idx} _id={link._id} label={link.label} url={link.label} />);

    return (
        <Window>
            {linkItems}
        </Window>
    )

}

const Window = styled.div`
    height: 100%;
    padding: 3em 2em;
`;

export default LinksWindow;
