import styled from "styled-components";

function Circle({ onClick }) {
  return <StyledCircle onClick={onClick}></StyledCircle>;
}

export default Circle;

const StyledCircle = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  border: 1px solid #e3e4f1;
  background: ${(props) => props.theme.bgColor};
  cursor: pointer;
  /* background-image: linear-gradient(135deg, #5df, #c058f3); */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    width: 2rem;
    height: 2rem;
  }
`;
