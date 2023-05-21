import './App.css';
import styled from 'styled-components';

function App() {
  return (
    <>
      <Body>
        <InputWapper>
          <NumberRange>
            <InputWapperBox>
              <label>
                {`첫 숫자 : `}
                <input />
              </label>
            </InputWapperBox>
            ~
            <InputWapperBox>
              <label>
                {`마지막 숫자 : `}
                <input />
              </label>
            </InputWapperBox>
          </NumberRange>
          <InputWapperBox>
            <label>
              {`뽑을 갯수 : `} <input />
            </label>
          </InputWapperBox>
          <SelectButton>뽑기</SelectButton>
        </InputWapper>
        <ResultWapper>결과창</ResultWapper>
      </Body>
    </>
  );
}

export default App;

const Body = styled.div`
  width: 60vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  padding: 10px;
`;

const InputWapper = styled(Body)`
  justify-content: space-between;
  width: 80%;
  height: 20%;
  margin-bottom: 10px;
`;

const ResultWapper = styled(InputWapper)`
  height: 40%;
  margin: 0;
`;

const NumberRange = styled.div`
  width: 65%;
  height: 30%;
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

const InputWapperBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    height: 30px;
    border: none;
    border-radius: 5px;
    background-color: #eeeeee;
  }
`;

const SelectButton = styled.button`
  border: 1px solid gray;
`;
