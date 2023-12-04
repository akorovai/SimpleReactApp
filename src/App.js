import React, { useEffect, useState } from "react";
import { GlobalStyle } from "./GlobalStyles";
import ListItem from "./components/ListItem";
import InputContainer from "./components/InputContainer";

import { Container, MainBox, ListBox } from "./App.styled";

const App = () => {
  const [items, setItems] = useState(() => {
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];
    return storedItems.length > 0
      ? storedItems
      : [
          { id: 1, value: "Saturn V" },
          { id: 2, value: "Long March 9" },
          { id: 3, value: "SpaceX Starship" },
        ];
  });

  const [newItemValue, setNewItemValue] = useState("");
  const [addButtonPressed, setAddButtonPressed] = useState(false);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const isInputValid = () => newItemValue.length >= 3;

  const handleAddItem = () => {
    if (isInputValid()) {
      const newItem = {
        id: items.length + 1,
        value: newItemValue,
      };
      setItems([...items, newItem]);
      setNewItemValue("");
      setAddButtonPressed(false);
    } else {
      setAddButtonPressed(true);
    }
  };

  const handleDeleteItem = (itemId) => {
    setItems(items.filter((item) => item.id !== itemId));
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <MainBox>
          <InputContainer
            newItemValue={newItemValue}
            setNewItemValue={setNewItemValue}
            addButtonPressed={addButtonPressed}
            handleAddItem={handleAddItem}
            isInputValid={isInputValid}
          />
          <ListBox>
            {items.length > 0 && <h3>Rockets</h3>}
            <div style={{ paddingLeft: "6px", paddingRight: "6px" }}>
              <ul>
                {items.map((item) => (
                  <ListItem
                    key={item.id}
                    item={item}
                    onDelete={() => handleDeleteItem(item.id)}
                  />
                ))}
              </ul>
            </div>
          </ListBox>
        </MainBox>
      </Container>
    </>
  );
};

export default App;