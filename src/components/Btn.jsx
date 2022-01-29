import styled from "styled-components";

const Wraper = styled.div`
    margin:20px 5px 0;
    display:inline-block;    
`;
const Button = styled.button`
    padding:5px 20px;
    background:#fff;
    font-size:14px;
    font-weight:700;
    cursor:pointer;
`;

function Btn( props ){

    const {name, onClick } = props;
    return (
        <Wraper>
            <Button onClick={onClick} type="button">{name}</Button>
        </Wraper>
    )
}

export default Btn;