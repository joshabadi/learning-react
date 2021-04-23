import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import { Icon, IconButton, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";

export const Header = ({ toggleFormHandler, isVisible }) => {
  return (
    <AppBar>
      <Toolbar>
        <Container maxWidth="sm">
          <div className="header-toolbar">
            <Typography>Todos</Typography>
            <Tooltip title={isVisible ? "Cancel" : "Add"}>
              <IconButton onClick={toggleFormHandler} size="small">
                <Fab size="small" color="primary">
                  {isVisible ? <CloseIcon /> : <AddIcon />}
                </Fab>
              </IconButton>
            </Tooltip>
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
