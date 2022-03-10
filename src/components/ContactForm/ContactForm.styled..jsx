import styled from '@emotion/styled';

export const Form = styled.form`
  width: 200px;
  padding: 20px 100px 20px 20px;
  border: 1px solid black;
  border-radius: 4px;
`;

export const Label = styled.label`
  font-size: 18px;
`;

export const InputForm = styled.input`
  margin-top: 5px;
  margin-bottom: 20px;
`;

export const ButtonAdd = styled.button`
  cursor: pointer;
  border-radius: 4px;
  padding: 5px 10px;
  background-color: #3f51b5;
  color: white;
  font-weight: 500;

  &:hover,
  &:focus {
    background-color: #303f9f;
  }
`;
