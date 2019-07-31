import React, {Component} from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator'
import './random-planet.css';

export default class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false
    };

    constructor() {
        super();
        this.updatePlanet();
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false});
    };

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })

    };

    updatePlanet() {
        const id = Math.floor(Math.random() * 17) + 2;
        // const id = 19999999;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);

    }

    render() {
        const { planet, loading, error } = this.state;

        const hasData = !(loading || error);


        const errorMassege = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? <PlaneView planet = {planet} /> : null;



            if(loading) {
            return <Spinner />
    }


        return (
            <div className="random-planet jumbotron rounde">
                {errorMassege}
                {spinner}
                {content}
            </div>
        );
    }
}


const PlaneView = ({ planet }) => {

    const { id, name, population,
            rotationPeriod, diameter} = planet;

    return(
      <React.Fragment>
          <img className="random-image"
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
      </React.Fragment>

    );
};
