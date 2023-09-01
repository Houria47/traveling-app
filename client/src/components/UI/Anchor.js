import styled from "styled-components";

const Anchor = styled.a`
  display: block;
  margin-top: 1rem;
  color: var(--blue);
  padding: 0.8rem 3rem;
  border: 0.2rem solid var(--blue);
  font-size: 1.7rem;
  cursor: pointer;
  background: #70b8d9ab;
  transition: var(--main-transition);

  &:hover {
    color: var(--text-color);
    background: var(--main-color-grad);
  }
`;

export default Anchor;
