import React, {Component} from 'react'

export default class Preloader extends Component {

    render() {
        const display = this.props.display;
        return <div>
            {display &&
            <div id='preloader'>
            </div>
            }
        </div>
    }
}