import styled from 'styled-components';

const InputField = styled.div`
  input {
    width: 290px;
    padding: 10px 5px;
    margin: 5px 0;
    border-radius: 5px;
    border: ${(props) => (props.error ? '2px solid red' : '1px solid #ccc')};
    font-size: 16px;
  }
`;

export default function TextFieldValidator({ value, onChange, errorCheck }) {
  return (
    <InputField error={errorCheck}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="New Object"
        className="input-field"
      />
    </InputField>
  );
}
