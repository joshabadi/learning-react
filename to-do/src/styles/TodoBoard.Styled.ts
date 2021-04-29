import styled from "styled-components";
import List from "@material-ui/core/List";

export const TodoBoard = styled(List)`
  background-color: #fff;
  flex: 1;
  overflow: auto;
  padding-top: 20px !important;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
