import React, { useState } from "react";

const Info = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    return (
        <>
        <div>
            <input type='text' value={name} onClick={onChangeName}/>
            <input type='text' value={email} onClick={onChangeEmail}/>
        </div>
        <div>
            <p>이름: {name}</p>
            <p>이메일: {email}</p>
        </div>
        </>
    );
}

export default Info;