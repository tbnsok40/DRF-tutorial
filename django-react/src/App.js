import logo from './logo.svg';
import './App.css';
import Django from "./Django";
import InputPlace from "./InputPlace";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <InputPlace/>
                <img src={logo} className="App-logo" alt="logo"/>
                <Django/>
            </header>
        </div>
    );
}

export default App;
