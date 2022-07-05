import styled from "styled-components";

const P = styled.p`
  font-size: 10rem;
  font-family: sans-serif;
  color: white;
  @media screen and (max-width: 480px) {
    font-size: 5rem;
  }
`;

export function Shazam(props) {
  return <P>Shazam!</P>;
}
