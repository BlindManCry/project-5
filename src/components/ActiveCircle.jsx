import styled from "styled-components";
import check from "/images/icon-check.svg";

function ActiveCircle({ onClick }) {
  return (
    <StyledActiveCircle onClick={onClick}>
      <img src={check} alt="check-icon" />
    </StyledActiveCircle>
  );
}

export default ActiveCircle;

const StyledActiveCircle = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  border: 1px solid #e3e4f1;
  background: ${(props) => props.theme.bgColor};
  cursor: pointer;
  background-image: linear-gradient(135deg, #5df, #c058f3);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    width: 2rem;
    height: 2rem;
  }
`;
