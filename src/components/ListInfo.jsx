import styled from "styled-components";
import FilterList from "./FilterList";

function ListInfo({ itemsLeft, setAllTodos }) {
  const handleClearCompleted = () => {
    setAllTodos((todo) => todo.filter((item) => item.active));
  };

  return (
    <ListInfoWrapper>
      <StyledListInfo>
        <RemainItems>{itemsLeft} items left</RemainItems>
        <FilterList />
        <ClearCompleted onClick={handleClearCompleted}>
          Clear Completed
        </ClearCompleted>
      </StyledListInfo>
    </ListInfoWrapper>
  );
}

export default ListInfo;

const ListInfoWrapper = styled.div``;

const StyledListInfo = styled.div`
  padding: 1.6rem 2.4rem 2rem 2.4rem;
  width: 100%;
  background: ${(props) => props.theme.bgColor};
  display: flex;
  justify-content: space-between;

  & > div {
    display: flex;
  }

  @media screen and (max-width: 480px) {
    padding: 1.6rem 2rem 2rem;

    & > div {
      display: none;
    }
  }
`;

const RemainItems = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.4rem;
  letter-spacing: -0.1944444477558136px;
  color: ${(props) => props.theme.infoTxtColor};

  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const ClearCompleted = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.4rem;
  letter-spacing: -0.1944444477558136px;
  color: ${(props) => props.theme.infoTxtColor};

  &:hover {
    color: ${(props) => props.theme.infoHoverColor};
    cursor: pointer;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;
