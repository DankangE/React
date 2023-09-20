import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const About = () => {
    // useLocation()을 통해 search 값을 받아온 후
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();

    const detail = searchParams.get('detail');
    const mode = searchParams.get('mode');

    const onToggleDetail = () => {
	// setSearchParams메소드를 활용하여 객체 형태로 값 업데이트
    setSearchParams({mode, detail: String(detail !== 'true')})
    }
    const onIncreaseMode = () => {
    const nextMode = mode === 'null' ? 1 : parseInt(mode) + 1
    setSearchParams({mode: String(nextMode), detail})
    }

    // const showDetail = search == '?detail=true'

    return (
      <div>
        <h2>React 소개</h2>
        <p>사이트를 소개하는 페이지입니다._About</p>
        <p>퀄리스트링: {location.search}</p>
        <p>detail : {detail}</p>
        <p>mode : {mode}</p>
        <button onClick={onToggleDetail}>Toggle detail</button>
        <button onClick={onIncreaseMode}>mode + 1</button>
      </div>
    );
  };
  
  export default About;