import styled from '@emotion/styled';

export const ItemList = styled.label`
  display: flex;
  align-items: center;
  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: black;
    margin-right: 15px;
    margin-left: 30px;
  }
`;

export const ButtonDelete = styled.button`
  cursor: pointer;
  margin-left: 15px;
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
