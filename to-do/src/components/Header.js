import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import { Icon, IconButton, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

export const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <Container maxWidth="sm">
          <Typography>Todos</Typography>
          <IconButton>
            <Icon>
              <AddIcon />
            </Icon>
          </IconButton>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
