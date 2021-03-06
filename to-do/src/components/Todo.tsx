import React from "react";
import { ITodo } from "../types/todo.types";
import * as el from "../styles/Todo.Styled";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";

interface ITodoProps {
  todo: ITodo;
  filterTodoHandler: (username: string) => void;
  setDeletableTodoHandler: (id: number | null) => void;
  setEditableTodoHandler: (id: number | null) => void;
  toggleModalHandler: (isOpen: boolean) => void;
  isEdit: boolean;
}

const Todo = ({
  todo,
  filterTodoHandler,
  setDeletableTodoHandler,
  setEditableTodoHandler,
  isEdit,
  toggleModalHandler,
}: ITodoProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const menuOpened = Boolean(anchorEl);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    setEditableTodoHandler(todo.id);
    handleCloseMenu();
  };

  const handleModaInitialization = (todoID: number | null) => {
    toggleModalHandler(true);
    setDeletableTodoHandler(todoID);
    handleCloseMenu();
  };

  return (
    <ListItem alignItems="flex-start">
      <el.Todo>
        <el.TodoContent>
          <ListItemAvatar>
            <Avatar src={todo.profilePicture} alt={todo.profilePicture} />
          </ListItemAvatar>
          <ListItemText
            primary={todo.title}
            secondary={
              <>
                <Typography
                  component="span"
                  variant="body2"
                  className=""
                  color="textPrimary"
                >
                  Created by:{" "}
                  <Button
                    variant="text"
                    color="primary"
                    size="small"
                    onClick={() => filterTodoHandler(todo.username)}
                  >
                    {todo.username}
                  </Button>
                </Typography>
                <el.TodoDescription>{todo.description}</el.TodoDescription>
              </>
            }
          />
        </el.TodoContent>
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleMenuClick}
          disabled={isEdit}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          keepMounted
          open={menuOpened}
          onClose={handleCloseMenu}
        >
          <MenuItem onClick={() => handleEdit()}>
            <ListItemIcon>
              <EditIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Edit" />
          </MenuItem>
          <MenuItem
            color="secondary"
            onClick={() => handleModaInitialization(todo.id)}
          >
            <ListItemIcon>
              <DeleteIcon color="secondary" fontSize="small" />
            </ListItemIcon>
            <ListItemText>
              <Typography color="secondary">Delete</Typography>
            </ListItemText>
          </MenuItem>
        </Menu>
      </el.Todo>
    </ListItem>
  );
};

export default Todo;
