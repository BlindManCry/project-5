import styled from "styled-components";
import landingImg from "/images/bg-desktop-light.jpg";
import darkLandingImg from "/images/bg-desktop-dark.jpg";
import landingImgMobile from "/images/bg-mobile-light.jpg";
import darkLandingImgMobile from "/images/bg-mobile-dark.jpg";
import moon from "/images/icon-moon.svg";
import sun from "/images/icon-sun.svg";
import Circle from "./Circle";
import ListItem from "./ListItem";
import ListInfo from "./ListInfo";
import FilterList from "./FilterList";
import { useEffect, useState } from "react";
import { useTodo } from "../context/TodoContext";

function Todo({ setIsDarkMode, isDarkMode }) {
  const [allTodos, setAllTodos] = useState([]);
  const [activeTodos, setActiveTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [query, setQuery] = useState("");
  const [itemsLeft, setItemsLeft] = useState(0);

  const { status } = useTodo();

  useEffect(() => {
    let count = 0;
    setActiveTodos([]);
    setCompletedTodos([]);
    for (let i = 0; i < allTodos.length; i++) {
      if (allTodos[i].active === true) {
        count++;
        setActiveTodos((active) => [allTodos[i], ...active]);
      } else {
        setCompletedTodos((completed) => [allTodos[i], ...completed]);
      }
    }
    setItemsLeft(count);
  }, [allTodos]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query) return;

    const currentTodo = {
      id: crypto.randomUUID(),
      text: query,
      active: true,
    };

    setAllTodos((todo) => [currentTodo, ...todo]);
    setQuery("");
  };

  return (
    <StyledTodo>
      <ImageContainer>
        {isDarkMode ? (
          <img src={darkLandingImg} alt="background-dark-desktop" />
        ) : (
          <img src={landingImg} alt="background-desktop" />
        )}
        {isDarkMode ? (
          <img src={darkLandingImgMobile} alt="background-dark-mobile" />
        ) : (
          <img src={landingImgMobile} alt="background-mobile" />
        )}

        <Header>
          <p>TODO</p>
          {isDarkMode ? (
            <img
              src={moon}
              alt="moon"
              onClick={() => setIsDarkMode((dark) => !dark)}
            />
          ) : (
            <img
              src={sun}
              alt="sun"
              onClick={() => setIsDarkMode((dark) => !dark)}
            />
          )}
        </Header>
        <CreateNewTodo onSubmit={handleSubmit}>
          <Circle />
          <input
            type="text"
            placeholder="Create a new todo…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </CreateNewTodo>
        <List>
          {status === "all" &&
            allTodos.map((todo) => {
              return (
                <ListItem
                  key={todo.id}
                  todo={todo}
                  allTodos={allTodos}
                  setAllTodos={setAllTodos}
                />
              );
            })}

          {status === "active" &&
            activeTodos.map((todo) => {
              return (
                <ListItem
                  key={todo.id}
                  todo={todo}
                  allTodos={allTodos}
                  setAllTodos={setAllTodos}
                />
              );
            })}

          {status === "completed" &&
            completedTodos.map((todo) => {
              return (
                <ListItem
                  key={todo.id}
                  todo={todo}
                  allTodos={allTodos}
                  setAllTodos={setAllTodos}
                />
              );
            })}

          {allTodos.length !== 0 && (
            <ListInfo itemsLeft={itemsLeft} setAllTodos={setAllTodos} />
          )}
        </List>
        {allTodos.length !== 0 && <FilterList />}
      </ImageContainer>
    </StyledTodo>
  );
}

export default Todo;

const StyledTodo = styled.div`
  width: 100%;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 30rem;
  & > :nth-child(1) {
    display: block;
    width: 100%;
    height: 100%;
  }

  & > :nth-child(2) {
    display: none;
  }

  & > .filter-list {
    display: none;
  }

  @media screen and (max-width: 480px) {
    height: 20rem;
    & > :nth-child(1) {
      display: none;
    }

    & > :nth-child(2) {
      display: block;
      width: 100%;
      height: 100%;
    }

    & > .filter-list {
      display: flex;
      gap: 1.9rem;
      width: 32.7rem;
      margin: auto;
      justify-content: center;
      margin-top: 1.6rem;
      padding: 1.5rem 0rem 1.5rem 0rem;
      border-radius: 0.5rem;
      box-shadow: 0 3.5rem 5rem -1.5rem rgba(194, 195, 214, 0.5);
    }
  }
`;

const Header = styled.header`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 54rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 7rem;

  & > p {
    font-size: 4rem;
    font-weight: 700;
    line-height: 4rem;
    letter-spacing: 1.5rem;
    color: #fff;
  }

  & > img {
    width: 2.51rem;
    height: 2.6rem;
    cursor: pointer;
  }

  @media screen and (max-width: 480px) {
    width: 32.5rem;
    top: 4.8rem;

    & > p {
      font-size: 2.9rem;
    }

    & > img {
      width: 1.615rem;
      height: 1.615rem;
    }
  }
`;

const CreateNewTodo = styled.form`
  position: absolute;
  width: 54rem;
  background: ${(props) => props.theme.bgColor};
  top: 15.8rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  padding: 2rem 0rem 2rem 2.4rem;
  gap: 2.4rem;
  border-radius: 5px;

  & > input {
    width: 100%;
    border: none;
    outline: none;
    font-family: Josefin Sans;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 1.8rem;
    letter-spacing: -0.25px;
    background: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.inputColor};

    &::placeholder {
      font-family: Josefin Sans;
      font-weight: 400;
      line-height: 1.8rem;
      letter-spacing: -0.25px;
      color: #9495a5;
    }
  }

  @media screen and (max-width: 480px) {
    width: 32.7rem;
    top: 10.8rem;
    padding: 1.4rem 0rem 1.4rem, 2rem;
    gap: 1.2rem;

    & > input {
      font-size: 1.2rem;
    }
  }
`;

const List = styled.div`
  width: 54rem;
  margin-left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  margin-top: -5.4rem;
  z-index: 99;
  box-shadow: ${(props) => props.theme.boxShadow};

  @media screen and (max-width: 480px) {
    width: 32.7rem;
    margin-top: -2.8rem;
  }
`;
