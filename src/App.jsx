import "./index.css";
import logo from "./image.png";
function Header() {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="React-logo" />
      <ul className="nav-list">
        <li>Home</li>
        <li>About</li>
        <li>Footer</li>
      </ul>
    </div>
  );
}
function Main(){
  return(
    <div>
      <h1>Fun facts about react</h1>
      
    </div>
  )
}
function App() {
  return (
    <div>
      <Header />
    </div>
  );
}
export default App;
