import React, {Component} from 'react';
import SwapiService from '../../services/swapi-service';

import './random-planet.css';

export default class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        id: null,
        name: null,
        population: null,
        rotationPeriod: null,
        diameter: null
    };

    constructor() {
        super();
        this.updatePlanet();
    }

    updatePlanet() {
        const id = Math.floor(Math.random() * 25 + 2);
        this.swapiService
            .getPlanet(id)
            .then((planet) => {
                this.setState({
                    id,
                    name: planet.name,
                    population: planet.population,
                    diameter: planet.diameter,
                    rotationPeriod: planet.rotation_period
                });
            });
    }

    render() {

        const {
            id,
            name,
            population,
            rotationPeriod,
            diameter
        } = this.state;


        return (
            <div className="random-planet jumbotron rounde">
                <img className="planet-image"
                     src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
                <div>
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-groupe-item">
                            <span className="term">Population:  </span>
                            <span>{population}</span>
                        </li>
                        <li className="list-groupe-item">
                            <span className="term">Rotation Period:  </span>
                            <span>{rotationPeriod}</span>
                        </li>
                        <li className="list-groupe-item">
                            <span className="term">Diameter:  </span>
                            <span>{diameter}</span>
                        </li>
                    </ul>

                </div>

            </div>
        )
    }

}
