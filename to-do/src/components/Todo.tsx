import React from "react";
import { ITodo } from "../types/todo.types";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
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
    <React.Fragment>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar src={todo.profilePicture} alt={todo.profilePicture} />
        </ListItemAvatar>
        <div className="todo-content">
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
          <MenuItem>
            <Button
              onClick={() => setEditableTodoHandler(todo.id)}
              variant="text"
              color="default"
              startIcon={<EditIcon />}
              size="small"
            >
              Edit
            </Button>
          </MenuItem>
          <MenuItem>
            <Button
              onClick={() => deleteTodoHandler(todo.id)}
              variant="text"
              color="secondary"
              startIcon={<DeleteIcon />}
              size="small"
            >
              Delete
            </Button>
          </MenuItem>
        </Menu>
      </ListItem>
      <Divider variant="inset" component="li" />
    </React.Fragment>
  );
};

export default Todo;
