import React from "react";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import orange from "@material-ui/core/colors/orange";
import styled from "styled-components";

export const MasterTheme = createMuiTheme({
  palette: {
    primary: {
      light: purple[500],
      main: purple[900],
    },
    secondary: {
      light: orange[500],
      main: orange[900],
    },
  },
});

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
