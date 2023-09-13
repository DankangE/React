import React, {useState} from "react";

const UserCreate = (props) => {
    return (
        <article>
            <h2>Create</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                const title = e.target.title.value;
                const body = e.target.body.value;
                props.onCreate(title, body);   // App.js의 props.onCreate()를 호출한다.
            }}>
                <p>Create 생성 영역</p>
                <p><input type="text" name='title' placeholder="title" /></p>
                <p><textarea name="body" placeholder="body"></textarea></p>
                <p><input type="submit" value='Create'></input></p>
            </form>
        </article>
    );
};

const UserUpdate = (props) => {

    const [title, setTitle] = useState(props.title);
    const [body, setBody] = useState(props.body);

    return (
        <article>
            <h2>Update</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                const title = e.target.title.value;
                const body = e.target.body.value;
                props.onUpdate(title, body);   // App.js의 props.onCreate()를 호출한다.
            }}>
                <p>Update 생성 영역</p>
                <p><input type="text" name='title' placeholder="title" value={title} 
                        onChange={(e) => {
                            console.log(e.target.value);
                            setTitle(e.target.value);
                        }}
                /></p>
                <p><textarea name="body" placeholder="body" value={body} onChange={(e) => {
                    setBody(e.target.value);
                }}></textarea></p>
                <p><input type="submit" value='Update'></input></p>
            </form>
        </article>
    );
};


export {UserCreate, UserUpdate};