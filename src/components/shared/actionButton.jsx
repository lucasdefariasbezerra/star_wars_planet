import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'semantic-ui-react';
import '../../template/style.css';


class ActionButton extends Component {
    static propTypes = {
        event: PropTypes.func,
        parameters: PropTypes.string,
        iconType: PropTypes.string,
        size: PropTypes.string,
        color: PropTypes.string,
        side: PropTypes.string,
        disabled: PropTypes.bool,
        text: PropTypes.string
    };

    static defaultProps = {
        event: () => {},
        parameters: '',
        iconType: '',
        size: '',
        color: '',
        side: '',
        disabled: false,
        text: ''
    };

    handleEvent = () => {
        const { event, parameters } = this.props;
        event(parameters);
    };

    render() {
        const {size, color, iconType, side, disabled, text } = this.props;
        return (
            <Button icon size={size} color={color}
                onClick={this.handleEvent}
                floated={side}
                disabled={disabled} >
                <Icon name={iconType}/>
                {text !== '' ? text : ''}
            </Button>
        );
    }
}

export default ActionButton;