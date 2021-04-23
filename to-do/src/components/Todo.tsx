import React from "react";
import { ITodo } from "../types/todo.types";
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
  deleteTodoHandler: (id: number | null) => void;
  setEditableTodoHandler: (id: number | null) => void;
  isEdit: boolean;
}

const Todo = ({
  todo,
  filterTodoHandler,
  deleteTodoHandler,
  setEditableTodoHandler,
  isEdit,
}: ITodoProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ListItem alignItems="flex-start">
      <div className="todo">
        <div className="todo-content">
          <ListItemAvatar>
            <Avatar src={todo.profilePicture} alt={todo.profilePicture} />
          </ListItemAvatar>
          <ListItemText
            primary={todo.title}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className=""
                  color="textPrimary"
                >
                  Created by:{" "}
                  <Button
                    variant="text"
                    color="default"
                    size="small"
                    onClick={() => filterTodoHandler(todo.username)}
                  >
                    {todo.username}
                  </Button>
                </Typography>
                {todo.description}
              </React.Fragment>
            }
          />
        </div>
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={() => setEditableTodoHandler(todo.id)}>
            <ListItemIcon>
              <EditIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Edit" />
          </MenuItem>
          <MenuItem
            color="secondary"
            onClick={() => deleteTodoHandler(todo.id)}
          >
            <ListItemIcon>
              <DeleteIcon color="secondary" fontSize="small" />
            </ListItemIcon>
            <ListItemText>
              <Typography color="secondary">Delete</Typography>
            </ListItemText>
          </MenuItem>
        </Menu>
      </div>
    </ListItem>
  );
};

export default Todo;
