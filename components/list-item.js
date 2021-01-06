import styled from 'styled-components';

const ListItem = ({name}) => (
    <Item>
        {name}
    </Item>
);

const Item = styled.div`
    width: 286px;
    height: 88px;

    background: #373737;
    box-shadow: 4px 4px 24px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
`;

export default ListItem;