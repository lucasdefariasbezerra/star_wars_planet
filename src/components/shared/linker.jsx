import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import '../../template/style.css';
import { Link } from 'react-router-dom';
import consts from '../utils/consts';


class Linker extends Component {
    static propTypes = {
        componentType: PropTypes.string,
        text: PropTypes.string,
        url: PropTypes.string,
        event: PropTypes.func
    };

    static defaultProps = {
        componentType: '',
        text: '',
        url: '',
        event: () => {}
    };

    renderComponent = (type, text) => {
        if (type === consts.BUTTON) {
            return (
                <Button size='massive' color='black'>{text}</Button>
            );
        }
    };

    handleEvent = () => {
        const { event } = this.props;
        event();
    }

    render() {
        const { componentType, url, text } = this.props;
            return (
                <Link to={`${url}`} className='link' onClick={this.handleEvent}>
                    {this.renderComponent(componentType, text)}
                </Link>
            );
    }
}

export default Linker;