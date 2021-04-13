import logo from "./images/bibliophile.svg";
import Dictionary from "./components/Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <img src={logo} alt="dictioanary-logo" className="logo" />
          <h1>React Dictionary App</h1>
        </header>

        <main>
          <Dictionary keyword="happy" />
        </main>
        <footer>
          <small>
            With ❤ coded by{" "}
            <a
              href="https://www.linkedin.com/in/irsilviana/"
              target="_blank"
              rel="noopener noreferrer"
            >
              irSilviana
            </a>{" "}
            | 2021 |{" "}
            <a
              href="https://github.com/irSilviana/React-Dictionary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open-sourced on GitHub
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://react-dictionary-app.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Netlify
            </a>{" "}
            <p>
              (📱 Responsive App - Best view with{" "}
              <a
                href="https://www.google.com/chrome/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Chrome
              </a>{" "}
              or{" "}
              <a
                href="https://www.microsoft.com/en-us/edge"
                target="_blank"
                rel="noopener noreferrer"
              >
                Microsoft Edge
              </a>{" "}
              Browser 🖥)
            </p>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
