import styled from "styled-components";

export const AppStyles = styled.div`
  display: grid;
  grid-template-areas:
    "nav header"
    "nav content";
  grid-template-columns: 2fr 10fr;
  grid-gap: 10px;

  @media (max-width: 768px) {
    grid-template-areas:
      "header"
      "content"
      "nav";
    grid-template-columns: 12fr;
    grid-gap: 10px;
  }
`;
