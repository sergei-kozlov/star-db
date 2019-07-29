import React, {Component} from 'react';

import './item-list.css';

export default class ItemList extends Component {

    render() {
        return (
            <ul className="item-list list-group">
                <li className="list-groupe-item">
                    Luke Skywalker
                </li>
                <li className="list-groupe-item">
                    Darth Vader
                </li>
                <li className="list-groupe-item">
                    R2-D2
                </li>
            </ul>
        );
    }
}

