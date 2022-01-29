import Tbody from '../components/Tbody';
import styled from 'styled-components';

const Warpper = styled.table`
    width:100%;
    border:1px solid #aaa;
`;
const Thead = styled.thead`
    background:#fffddd;
    font-size: 14px;
`;

function Table(){
    return (
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
            <Tbody />
        </Warpper>
    )
}

export default Table;