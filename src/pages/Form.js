import axios from 'axios';
import { useState } from 'react/cjs/react.development';
import Btn from '../components/Btn';

async function sendUserContent(data){
    const getData = await axios.post("https://hwcledor.web-ping.co.kr/board", data)
        .then( res => console.log(res.data.data))
}

export default function Form() {
    const [userContents, setUserContents] = useState({
        user_name:'',
        password:'',
        title:'',
        content:''
    })

    const getValue = e => {
        const { name, value } = e.target;
        setUserContents({
            ...userContents,
            [name]:value
        });
    }

    const data = ()=>{ 
        sendUserContent(userContents);
    }

    return (
        <div>
            <p>
                <label >
                    이름
                    <input tpye="text" id="user_name" name="user_name" onChange={getValue}/>
                </label>                
            </p>
            <p>
                <label htmlFor="user_pw">비밀번호</label>
                <input type="password" id="user_pw" name="password" onChange={getValue}/>
            </p>
            <p>
                <label htmlFor="user_title">제목</label>
                <input tpye="text" id="user_title" name="title" onChange={getValue}/>
            </p>
            <p>
                <label htmlFor="user_content">내용</label>
                <textarea id="user_content" rows="5" cols="30" name="content" onChange={getValue}></textarea>
            </p>
            <Btn onClick={data} name="확인" />
        </div>
    )
}

