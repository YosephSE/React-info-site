import "./index.css";
import logo from "./image.png";
function Header() {
  return (
    <div className="header">
      <div className="logo-facts">
      <img className="logo" src={logo} alt="React-logo" />
      <p>ReactFacts</p>
      </div>
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
    <div className="main">
      <h1 className="main-header">Fun facts about react</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  )
}
function App() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}
export default App;
