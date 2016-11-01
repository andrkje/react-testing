import React, {Component} from 'react';
import './App.css';


import Message from './components/Message'

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>React component testing</h1>
                <hr/>
                <Message
                    title="First message"
                    body="This is the first message."
                />
                <Message
                    title="Second message"
                    body="This is the second message."
                />
            </div>
        );
    }
}

export default App;
