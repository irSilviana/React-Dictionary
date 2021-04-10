import logo from "./logo192.png";
import Dictionary from "./components/Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <img src={logo} alt="reactlogo" className="logo" />
          <h1>Hello from React Dictionary App</h1>
        </header>
        <Dictionary />
      </div>
    </div>
  );
}

export default App;
