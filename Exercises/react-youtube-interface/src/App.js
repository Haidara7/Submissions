import React, {Component} from 'react';

import './App.css';
import Img from './Component/logo';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {}

    }

    render() {
        return (
            <div className="App">
                <Img/>
            </div>
        );
    }
}

export default App;
