import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import '../css/SolarSystem.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="planet-cards">
          {
            planets.map(({ name, image }) => (
              <PlanetCard
                key={ name }
                planetName={ name }
                planetImage={ image }
              />))
          }
        </div>
      </div>
    );
  }
}

export default SolarSystem;
