
import styled from "styled-components";

const ListItemWrapper = styled.li`
  padding: 0 auto;
  margin: 0 20px;
`;

const ElementBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2px;
  padding: 6px 8px;
  &:hover {
    border: 2px solid #ccc;
    border-radius: 5px;
  }
`;

const TextBox = styled.div`
  margin-right: 12px;
  p {
    font-size: 16px;
    font-weight: 400;
    
  }
`;
const ButtonBox = styled.div`
  button {
    border: 0;
    outline: 0;
    background: #f44336;
    border-radius: 8px;
    padding: 5px 7px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
  }
`;

export default function ListItem({ item, onDelete }) {
  return (
    <ListItemWrapper>
      <ElementBox>
        <TextBox>
          <p>
          ID: {item.id}, Name: {item.value}
          </p>
        </TextBox>
        <ButtonBox>
          <button onClick={() => onDelete(item.id)}>Delete</button>
        </ButtonBox>
      </ElementBox>
    </ListItemWrapper>
  );
}
