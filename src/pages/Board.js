import Tbody from '../components/Tbody';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Warpper = styled.table`
    width:100%;
    border:1px solid #aaa;
`;
const Thead = styled.thead`
    background:#fffddd;
    font-size: 14px;
`;

function Board(){
  const [boardData, setBoardData] = useState([]);
  useEffect(()=>{
    axios.get("https://hwcledor.web-ping.co.kr/board")
    .then( res => setBoardData(res.data))
    .catch( err => alert(err));
    console.log(boardData)
  }, [])
  return (
    <>
      <h2>게시판</h2>
      <Warpper>
        <Thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
            <th>조회수</th>
          </tr>
        </Thead>
        <tbody>

        </tbody>
      </Warpper>
    </>
  )
}

export default Board;