import styled from "styled-components";

export const Input = styled.input`
  width: 200px;
  height: 50px;
  padding: 12px;
  font-size: 1.3rem;
  font-family: sans-serif;
  text-transform: uppercase;
  text-align: center;
  border-radius: 8px;
  border: none;
  outline: none;
  filter: invert(100%);
  &::placeholder{
    font-size: 1rem;
  }
`;
