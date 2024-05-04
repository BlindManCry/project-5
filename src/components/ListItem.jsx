import styled from "styled-components";
import Circle from "./Circle";
import cross from "/images/icon-cross.svg";
import ActiveCircle from "./ActiveCircle";

function ListItem({ todo, allTodos, setAllTodos }) {
  const { id, text, active } = todo;

  const handleActive = (id) => {
    const readIndex = allTodos.findIndex((item) => item.id === id);
    allTodos[readIndex].active = false;
    setAllTodos([...allTodos]);
  };

  const handleDisactive = (id) => {
    const readIndex = allTodos.findIndex((item) => item.id === id);
    allTodos[readIndex].active = true;
    setAllTodos([...allTodos]);
  };

  const handleDeleteItem = (id) => {
    setAllTodos((todo) => todo.filter((item) => item.id !== id));
  };

  return (
    <>
      <StyledListItem>
        <div>
          {active ? (
            <Circle onClick={() => handleActive(id)} />
          ) : (
            <ActiveCircle onClick={() => handleDisactive(id)} />
          )}

          <Text active={active.toString()}>{text}</Text>
        </div>
        <CrossIcon src={cross} onClick={() => handleDeleteItem(id)} />
      </StyledListItem>
    </>
  );
}

export default ListItem;

const StyledListItem = styled.div`
  width: 100%;
  background: ${(props) => props.theme.bgColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2.4rem 2rem 2.4rem;
  border-radius: 5px;
  border-bottom: 1px solid #e3e4f1;

  & > div {
    display: flex;
    align-items: center;
    gap: 2.4rem;
  }

  &:hover {
    & > img {
      display: block;
    }
  }

  @media screen and (max-width: 480px) {
    padding: 1.6rem 2rem;
  }
`;

const Text = styled.p`
  font-family: Josefin Sans;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 1.8rem;
  letter-spacing: -0.25px;
  cursor: pointer;
  color: ${(props) =>
    props.active === "false"
      ? props.theme.nonActiveText
      : props.theme.textColor};
  text-decoration: ${(props) =>
    props.active === "false" ? "line-through" : ""};

  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const CrossIcon = styled.img`
  justify-self: flex-end;
  cursor: pointer;
  display: none;

  @media screen and (max-width: 480px) {
    display: block;
    width: 1.2rem;
    height: 1.2rem;
  }
`;
