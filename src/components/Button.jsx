import styled from "styled-components";

const Btn = styled.button`
  width: 175px;
  height: 50px;
  border-radius: 8px;
  border: none;
  background-color: gray;
  color: black;
  font-size: 1.5rem;
  font-family: sans-serif;
  cursor: pointer;
`;

export function Button(props) {
  return <Btn>{props.text}</Btn>;
}
