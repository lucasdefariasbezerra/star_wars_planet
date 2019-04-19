import React from 'react';
import PropTypes from 'prop-types';
import { Feed } from 'semantic-ui-react';
import ListItem from './listItem.jsx';

import '../../template/style.css';

const mapItems = (list) => {
    return list.map(item => (<ListItem key={item.title} item={item} />));
};

const DetailsList = (props) => {
    const { list } = props;
    return (
        <Feed>
            {mapItems(list)}
        </Feed>
    );
};

DetailsList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.any)
};

DetailsList.defaultProps = {
    list: []
};

export default DetailsList;