import { useState } from 'react';
import './App.css';
import styled from 'styled-components';

function App() {
  const [minNumber, setMinNumber] = useState(0);
  const [maxNumber, setMaxNumber] = useState(0);
  return (
    <>
      <Body>
        <InputWapper>
          <NumberRange>
            <div>
              <label>
                {`첫 숫자 : `}
                <input />
              </label>
            </div>
            ~
            <div>
              <label>
                {`마지막 숫자 : `}
                <input />
              </label>
            </div>
          </NumberRange>
          <div>
            <label>
              {`뽑을 갯수 : `} <input />
            </label>
          </div>
          <button>뽑기</button>
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
  display: flex;
  justify-content: space-between;
  align-content: center;
`;
