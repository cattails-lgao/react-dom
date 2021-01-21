import React, { Component } from 'react'
import { message, Button } from 'antd';

export default class App extends Component {

    handler = () => {
        message.info('This is a normal message');
    }

    render() {
        return (
            <div>
                <Button type="primary" onClick={this.handler}>Button</Button>
            </div>
        )
    }
}
