import styled from "styled-components";

const P = styled.p`
  font-size: 5rem;
  font-family: sans-serif;
  color: white;
`;

export function Shazam(props) {
  return <P>{props.text}</P>;
}
