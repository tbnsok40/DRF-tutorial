import logo from './logo.svg';
import './App.css';
import Django from "./Django";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <Django/>
            </header>
        </div>
    );
}

export default App;
