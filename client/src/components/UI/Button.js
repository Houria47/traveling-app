import styled from "styled-components";

const Button = styled.button`
  display: block;
  margin-top: 1rem;
  color: #f8f8f8;
  padding: 0.8rem 3rem;
  font-size: 1.7rem;
  cursor: pointer;
  background: var(--main-color);
  transition: var(--main-transition);
  border-radius: 7px;
  &:hover {
    background: var(--main-color-grad);
  }
`;

export default Button;
