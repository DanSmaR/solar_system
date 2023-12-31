import React from 'react';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import Title from './Title';
import '../css/Missions.css';

export default class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div className="mission-cards">
          {
            missions.map(({ name, year, country, destination }) => (
              <MissionCard
                key={ name }
                name={ name }
                year={ year }
                country={ country }
                destination={ destination }
              />
            ))
          }
        </div>
      </div>
    );
  }
}
