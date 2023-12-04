import React from "react";
import TextFieldValidator from "./TextFieldValidator";
import { MainTitle, ErrorText, AddButtonBox } from "./InputContainer.styled";



const InputContainer = ({
  newItemValue,
  setNewItemValue,
  addButtonPressed,
  handleAddItem,
  isInputValid,
}) => {
  
  return (
    <>
      <MainTitle>
        <h3>List of Rockets</h3>
      </MainTitle>
      <div style={{ textAlign: "left", marginLeft: "35px" }}>
        <TextFieldValidator
          value={newItemValue}
          onChange={(e) => setNewItemValue(e.target.value)}
          errorCheck={addButtonPressed && !isInputValid()}
        />
        {addButtonPressed && !isInputValid() && (
          <ErrorText>*wprowadź co najmniej 3 znaki!</ErrorText>
        )}
        <AddButtonBox>
          <button onClick={handleAddItem}>Add</button>
        </AddButtonBox>
      </div>
    </>
  );
};

export default InputContainer;
