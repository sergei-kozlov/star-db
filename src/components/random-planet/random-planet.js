import React, {Component} from 'react';

import './random-planet.css';

export default class RandomPlanet extends Component {
    render() {
        return (
            <div className="random-planet jumbotron rounde">
                <img className="planet-image"
                     src="https://starwars-visualguide.com/assets/img/planets/5.jpg"/>
                <div>
                    <h4>Planet Name</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-groupe-item">
                            <span className="term">Population</span>
                            <span>12345</span>
                        </li>
                        <li className="list-groupe-item">
                            <span className="term">Rotation Period</span>
                            <span>43</span>
                        </li>
                        <li className="list-groupe-item">
                            <span className="term">Diametr</span>
                            <span>100</span>
                        </li>
                    </ul>

                </div>

            </div>
        )
    }

}
