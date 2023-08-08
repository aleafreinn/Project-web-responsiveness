import styled from "styled-components"
import "./App.css"
import MyForm from "./components/MyForm"

function App() {
  const TestContainer = styled.div`
    box-sizing: border-box;
    background-color: #FFFFFF44;
    border: 2px solid white;
    border-radius: 5px;
    padding: 12px 24px;
    margin: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    min-width: 50%;
    cursor: pointer;

    & p {
      background-color: #00000088;
      color: white;
      border: 2px solid white;
      border-radius: 5px;
      padding: 12px 24px;
      font-size: 30pt;
      transition: all 0.15s ease-in-out;
    }

    &:hover {
      & p {
        color: #00000088;
        background-color: white;
      }
    }

    &:active {
      & p {
        color: red;
      }
    }
  `
  
  return (
    <>
      <TestContainer>
        <p style={{margin: "0px"}}>This is a test</p>
        <MyForm />
      </TestContainer>
    </>
  )
}

export default App
