import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import styled from "styled-components";

// theme definitions
import purple from "@material-ui/core/colors/purple";
import orange from "@material-ui/core/colors/orange";

import Container from "@material-ui/core/Container";

export const MasterTheme = createMuiTheme({
  palette: {
    primary: {
      light: purple[500],
      main: purple[700],
    },
    secondary: {
      light: orange[500],
      main: orange[900],
    },
  },
});

export const ContainerStyled = styled(Container)`
  @media (max-width: 600px) {
    padding: 0;
  }
`;

export const App = styled("div")`
  display: flex;
  height: calc(100vh - 65px);
  flex: 1;
  flex-direction: column-reverse;
  margin: 65px auto 0 auto;
  @media (max-width: 600px) {
    margin-top: 55px;
    height: calc(100vh - 55px);
  }
`;

export const PurpleButton = styled.input`
  background-color: rgb(89, 64, 119);
  padding: 10px 0;
  width: 300px;
  color: #f4f6f8;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: rgb(109, 84, 140);
  }
`;
