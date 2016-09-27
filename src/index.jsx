import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';


class Home extends Component {

    render() {
        return (
            <div>
                <h1>Hi</h1>
            </div>
        );
    };
}

render(<Home/>, document.getElementById('container'));