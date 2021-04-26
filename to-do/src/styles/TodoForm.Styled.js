import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

export const TodoForm = styled("form")`
  background-color: #fff;
  padding: 20px 15px 15px 15px;
`;

export const TextInput = styled(TextField)`
  width: 100%;
`;

export const SelectDropdown = styled(FormControl)`
  width: 100%;
`;

export const BtnContainer = styled("div")`
  margin-top: 10px;
`;
