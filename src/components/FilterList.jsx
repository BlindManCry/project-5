import styled from "styled-components";
import { useTodo } from "../context/TodoContext";

function FilterList() {
  const { status, setStatus } = useTodo();
  return (
    <StyledFilterList className="filter-list">
      <Text
        status={status}
        currentstatus="all"
        onClick={() => setStatus("all")}
      >
        All
      </Text>
      <Text
        status={status}
        currentstatus={"active"}
        onClick={() => setStatus("active")}
      >
        Active
      </Text>
      <Text
        status={status}
        currentstatus={"completed"}
        onClick={() => setStatus("completed")}
      >
        Completed
      </Text>
    </StyledFilterList>
  );
}

export default FilterList;

const StyledFilterList = styled.div`
  display: flex;
  gap: 1.9rem;
  display: flex;
  background: ${(props) => props.theme.bgColor};

  @media screen and (max-width: 480px) {
    margin-top: 40px;
  }
`;

const Text = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.4rem;
  letter-spacing: -0.1944444477558136px;
  color: ${(props) =>
    props.status === props.currentstatus
      ? "#3A7CFD"
      : props.theme.infoTxtColor};
  transition: all 0.3s;

  &:hover {
    color: ${(props) => props.theme.infoHoverColor};
    cursor: pointer;
  }
`;
