import styled from "styled-components";

const ListItem = ({ list, handleSelect, selectedListId, index }) => {
  const toggleSelected = () => {
    handleSelect(list, index);
  };

  return (
    <Item
      className="list-item"
      onClick={toggleSelected}
      selected={selectedListId === list._id}
    >
      {list.name}
    </Item>
  );
};

const Item = styled.div`
  ${({ selected }) =>
    selected &&
    `
        background: #DEC800;
    `}
`;

export default ListItem;
