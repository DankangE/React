// 컴포넌트 이름에서 대문자로 시작하는 컴포넌트는 React 컴포넌트에 해당 됨
import React from "react";

const Header = () => {
    return (
        <div className="App-header">
            <header>
                <h1>
                    <a href="/">React</a>
                </h1>
            </header>
        </div>
    );
}

const Navigation = () => {
    const home = 'Home';
    return (
        <div className="nav">
            <nav>
                <ul>
                    <li>
                        <a href="/">{home}</a>
                    </li>
                    <li>
                        <a href="/create">Create</a>
                    </li>
                    <li>
                        <a href="/update">Update</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

function Article() {
    return (
        <div className="art">
            <article>
                <h2>환영합니다.</h2>
            </article>
        </div>
    );
}

// export default Header;
export {Header, Navigation, Article};