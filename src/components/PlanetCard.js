import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/PlanetCard.css';

export default class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;

    return (
      <div data-testid="planet-card" className="card">
        <img
          className={ `card__image card__image--${planetName}` }
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
          width="200px"
        />
        <h3 data-testid="planet-name">{planetName}</h3>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetImage: PropTypes.string.isRequired,
  planetName: PropTypes.string.isRequired,
};
