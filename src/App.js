import logo from "./logo.png";
import Dictionary from "./components/Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <img src={logo} alt="reactlogo" className="logo" />
          <h1>React Dictionary App</h1>
        </header>

        <main>
          <Dictionary keyword="happy" />
        </main>
        <footer>
          <small>
            This project was coded by{" "}
            <a
              href="https://www.linkedin.com/in/irsilviana/"
              target="_blank"
              rel="noopener noreferrer"
            >
              irSilviana
            </a>
            {", "}
            <a
              href="https://github.com/irSilviana/React-Dictionary"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://react-dictionary-app.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Netlify
            </a>{" "}
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
