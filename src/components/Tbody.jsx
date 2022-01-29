import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.tbody`
    font-size: 14px;
    text-align: center;
`;

const Td = styled.td`
    text-align: left;
`;

const Span = styled.span`
    padding-right:10px;
    font-weight: 700;
`;

const A = styled.a`
    color:inherit;
    text-decoration: none;
`;

function Tbody(){
    const [data, setData] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:3000/data/data.json')
        .then((response) => response.json())
        .then((json) => setData(json.reverse()));
    }, [])  

    return (
        <Wrapper>
            {data.map( (item, idx) => {
                return (
                    <tr key={idx}>
                        <td>{item.num}</td>
                        <Td><A href="#"><Span>{item.event}</Span>{item.title}</A></Td>
                        <td>{item.user}</td>
                        <td>{item.date}</td>
                        <td>{item.views}</td>
                    </tr>
                )
            })}      
        </Wrapper>
    )
};

export default Tbody;

