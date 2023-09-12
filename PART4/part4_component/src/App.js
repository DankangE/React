// import logo from './logo.svg';
// import './App.css';
import React from "react";
import "./App.css";
import NewComponent from "./MyComponent";
// import Header from "./Header";
// import { Header, Navigation, Article} from "./Header";
import * as Comp from "./Header";

// 클래스형 컴포넌트
// class App extends Component {
//   render() {
//     /* JSX 반환 */
//     const name = "React";
//     return  <div className="react">{name}</div>
//   }
// }

// 함수형 컴포넌트
const App = () => {
  return (
    <div>
      <Comp.Header/>
      <Comp.Navigation/>
      <Comp.Article/>
      <NewComponent />
    </div>
  );
};

export default App;
