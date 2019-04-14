import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Image } from 'semantic-ui-react';

const { Row } = Grid;

const RowItem = (props) => {
    return (
        <Row columns={props.columns}>
            <Image src={props.imageSrc} />
        </Row>
    );
};

RowItem.propTypes = {
    columns: PropTypes.number,
    imageSrc: PropTypes.string
};

RowItem.defaultProps = {
    columns: 0,
    imageSrc: ''
};

export default RowItem;