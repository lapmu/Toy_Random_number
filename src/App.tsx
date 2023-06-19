import { ChangeEvent, useState } from 'react';
import './App.css';
import styled from 'styled-components';

function App() {
  const [minNumber, setMinNumber] = useState(0);
  const [maxNumber, setMaxNumber] = useState(0);
  const [number, setNumber] = useState<number[]>([]);
  const [selectNumber, setSelectNumber] = useState(0);
  const [results, setResults] = useState<number[][]>([]);

  const handleChangeMinNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setMinNumber(() => Number(e.target.value));
  };

  const handleChangeMaxNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxNumber(() => Number(e.target.value));
  };

  const handleChangeSelectNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectNumber(() => Number(e.target.value));
  };

  const handleClickSelectButton = () => {
    if (isNaN(minNumber) || isNaN(maxNumber) || isNaN(selectNumber)) {
      alert('숫자를 입력해주세요');
      setMinNumber(0);
      setMaxNumber(0);
      setSelectNumber(0);
    } else {
      if (number.length === 0) {
        const numberList: number[] = [];

        for (let i = minNumber; i <= maxNumber; i++) {
          numberList.push(i);
        }

        const select: number[] = [];

        for (let i = 0; i < selectNumber; i++) {
          select.push(
            numberList.splice(
              Math.floor(Math.random() * numberList?.length),
              1
            )[0]
          );
        }

        setResults((prev) => [...prev, select]);
        setNumber(() => numberList);
      } else {
        const copy = [...number];

        const select: number[] = [];

        for (let i = 0; i < selectNumber; i++) {
          if (copy.length === 0) {
            break;
          }
          select.push(
            copy.splice(Math.floor(Math.random() * copy?.length), 1)[0]
          );
        }
        setResults((prev) => [...prev, select]);

        setNumber(() => copy);

        if (copy.length === 0) {
          alert('뽑기가 끝났습니다.');
        }
      }
    }
  };

  const handleClickResetButton = () => {
    if (confirm('정말로 초기화를 하시겠습니까?')) {
      setMinNumber(0);
      setMaxNumber(0);
      setSelectNumber(0);
      setResults([]);
      setNumber([]);
    }
  };

  return (
    <>
      <Body>
        <InputWapper>
          <NumberRange>
            <InputWapperBox>
              <label>
                {`첫 숫자 : `}
                <input onChange={handleChangeMinNumber} value={minNumber} />
              </label>
            </InputWapperBox>
            <InputWapperBox>~</InputWapperBox>
            <InputWapperBox>
              <label>
                {`마지막 숫자 : `}
                <input onChange={handleChangeMaxNumber} value={maxNumber} />
              </label>
            </InputWapperBox>
          </NumberRange>
          <InputWapperBox>
            <label>
              {`뽑을 갯수 : `}
              <input onChange={handleChangeSelectNumber} value={selectNumber} />
            </label>
          </InputWapperBox>
          <SelectButton onClick={handleClickSelectButton}>뽑기</SelectButton>
          <SelectButton onClick={handleClickResetButton}>초기화</SelectButton>
        </InputWapper>
        <ResultWapper>
          {results.map((result, idx) => (
            <div>{`${idx + 1}회 : ${result.join(', ')}`}</div>
          ))}
        </ResultWapper>
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
  height: 40%;
  margin-bottom: 10px;
`;

const ResultWapper = styled(InputWapper)`
  overflow: auto;
  justify-content: flex-start;
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

  label {
    font-size: 1vw;
  }

  input {
    font-size: 1vw;
    padding: 3%;
    border: none;
    border-radius: 5px;
    background-color: #eeeeee;
  }
`;

const SelectButton = styled.button`
  font-size: 1vw;
  padding: 0.5% 3%;
  border: 1px solid gray;
`;
