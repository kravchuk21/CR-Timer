import styled from "styled-components";

export const AppStyles = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-areas:
    "nav header"
    "nav content";
  grid-template-columns: 2fr 10fr;
  grid-template-rows: 1fr 10fr;
  grid-gap: 10px;

  @media (max-width: 768px) {
    grid-template-areas:
      "header"
      "content"
      "nav";
    grid-template-columns: 12fr;
    grid-template-rows: 1fr 6fr 5fr;
    grid-gap: 10px;
  }
`;
 