import styled from "styled-components";

const Container = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    width: 750px;
  }

  /* Medium */
  @media (min-width: 992px) {
    width: 970px;
  }

  /* Large */
  @media (min-width: 1200px) {
    width: 1170px;
  }
`;

export default Container;
