import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PlanetCard from './planetCard';
import ActionButton from '../shared/actionButton';
import { Grid } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchData, clearFilms } from './planetAction';
import { getRandom } from '../utils/utils';


export class PlanetFeed extends Component {
    static propTypes = {
        fetchData: PropTypes.func,
        clearFilms: PropTypes.func,
        planet: PropTypes.objectOf(PropTypes.any),
        films: PropTypes.arrayOf(PropTypes.any)
    };

    static defaultProps = {
        fetchData: () => {},
        clearFilms: () => {},
        planet: {},
        films: []
    };

    handleNext = () => {
        this.handleFetchData();
    }

    componentDidMount() {
        this.handleFetchData();
    }

    handleFetchData = () => {
        console.log('cai aqui');
        const { fetchData, clearFilms } = this.props;
        const id = getRandom(61);
        clearFilms();
        fetchData(id);
    }

    render() {
        const { planet, films } = this.props;
        return(
            <div>
                <PlanetCard planet={planet} films={films} />
                <Grid centered className="itemSpace">
                    <ActionButton iconType='play' size='big' text='NEXT' color= 'green' event={this.handleNext} />
                </Grid>
            </div>
        );
    }
}
const mapStateToProps = state => ({ planet: state.data.planet,
  films: state.data.films });
const mapDispatchToProps = dispatch => bindActionCreators({ fetchData, clearFilms }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(PlanetFeed);