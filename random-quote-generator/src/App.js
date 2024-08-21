import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {

    state = { advice: '' };

    componentDidMount() {
        console.log('Component mounted');
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                const { advice } = response.data.slip;
                this.setState({ advice });
            })
            .catch((error) => {
                console.error('Error fetching advice:', error);
            });
    };

    render() {
        return (
            <div className="app">
                <h1>Random Quote Generator</h1>
                <p>{this.state.advice}</p>
                <button onClick={this.fetchAdvice}>Get New Advice</button>
            </div>
        );
    }
}

export default App;
