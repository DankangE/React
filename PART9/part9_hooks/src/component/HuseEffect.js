import React, {useState, useEffect} from "react";

const UserEF = ({user, onRemove, ontoggle})=> {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    
        useEffect(()=> {
            alert('접속 ㅎㅇ')
            console.log('컴포넌트가 화면에 출력')
        }, []);

    const onChangeName = e => {
        setName(e.target.value);
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    return (
        <>
        <div>
            <input type='text' value={name} onChange={onChangeName}/>
            <input type='text' value={email} onChange={onChangeEmail}/>
        </div>
        <div>
            <p>이름: {name}</p>
            <p>이메일: {email}</p>
        </div>
        </>
    );
}

export default UserEF