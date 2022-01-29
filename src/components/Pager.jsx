import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward, IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const Wrapper = styled.div`
    display:flex;
    justify-content:center;
`;
const Li = styled.li`
    list-style:none;
`;
const P = styled.p`
    margin:0 8px;
    width: 22px;
    height:22px;
    border:1px solid black;
    border-radius:50%;
    text-align:center;
`;

function Pager(){
    return (
        <Wrapper>            
            <P><a href="#"><IoIosArrowRoundBack color="black" size={15}/></a></P>
            <P><a href="#"><IoIosArrowBack color="black" size={15}/></a></P>
            <ul><Li>1</Li></ul>
            <P><a href="#"><IoIosArrowForward color="black" size={15}/></a></P>
            <P><a href="#"><IoIosArrowRoundForward color="black" size={15}/></a></P>
        </Wrapper>
    )
}

export default Pager;