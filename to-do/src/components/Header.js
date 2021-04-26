import React from "react";
import * as GlobalElements from "../styles/App.Styled";
import * as el from "../styles/Header.Styled";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { IconButton, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";

export const Header = ({ toggleFormHandler, isTodoFormVisible }) => {
  return (
    <AppBar>
      <Toolbar>
        <GlobalElements.ContainerStyled maxWidth="sm">
          <el.HeaderToolbar>
            <Typography>Todos</Typography>
            <Tooltip title={isTodoFormVisible ? "Cancel" : "Add"}>
              <IconButton onClick={toggleFormHandler} size="small">
                <Fab size="small" color="primary">
                  {isTodoFormVisible ? <CloseIcon /> : <AddIcon />}
                </Fab>
              </IconButton>
            </Tooltip>
          </el.HeaderToolbar>
        </GlobalElements.ContainerStyled>
      </Toolbar>
    </AppBar>
  );
};
