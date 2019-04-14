import React from 'react';
import PropTypes from 'prop-types';
import { getImage } from '../utils/utils';
import { Card, Icon, Image } from 'semantic-ui-react';
import DetailsList from '../shared/detailsList';
import '../../template/style.css';

const { Header, Content, Description } = Card;

const PlanetCard = (props) => {
    const { planet, films } = props;
    const image = getImage(planet.climate);
    return (
        <Card centered className="cardStyle">
                <Image src={image}/>
                <Content>
                    <Header>{planet.name}</Header>
                    <Description>Population : {planet.population}</Description>
                    <Description>Climate : {planet.climate}</Description>
                    <Description>Terrain : {planet.terrain}</Description>
                </Content>
                {
                    films.length > 0 &&
                    (<Content extra>
                        <a><Icon name='user' />Movies</a>
                        <DetailsList list={films} />
                    </Content>)
                }
            </Card>
    );
};

PlanetCard.propTypes = {
    planet: PropTypes.objectOf(PropTypes.any),
    films: PropTypes.arrayOf(PropTypes.any)
};

PlanetCard.defaultProps = {
    planet: {},
    films: []
};

export default PlanetCard;