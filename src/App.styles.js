import styled from 'styled-components';

export const AppContainer = styled.main`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: 68px 1fr 68px;
  grid-template-areas: 'header' 'content' 'footer';
  #content {
    grid-area: content;
  }
  #header {
    grid-area: header;
  }
  #footer {
    grid-area: footer;
  }
`;
