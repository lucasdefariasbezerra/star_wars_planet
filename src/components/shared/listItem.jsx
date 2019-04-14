import React from 'react';
import PropTypes from 'prop-types';
import { Feed } from 'semantic-ui-react';

import '../../template/style.css';

 const { Event, Content, Label, Summary } = Feed;

const ListItem = (props) => {
    const { item } = props;
    return (
        <Event>
            <Label image='https://cdn2.iconfinder.com/data/icons/space-stuff-1/68/bb8-512.png' />
            <Content>
                <Label content={item.title} />
                <Summary>
                    director: { item.director } producer: {item.producer}
                </Summary>
            </Content>
        </Event>
    );
};

ListItem.propTypes = {
    item: PropTypes.objectOf(PropTypes.any)
};

ListItem.defaultProps = {
    item: {}
};

export default ListItem;