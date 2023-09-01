import styled from "styled-components";

const ListItem = styled.li`
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: var(--main-transition);
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
`;

export default ListItem;
