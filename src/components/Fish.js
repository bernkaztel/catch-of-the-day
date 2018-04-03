import React from 'react';
import {formatPrice } from '../helpers'

class Fish extends React.Component {
  render() {
    return (
     <li clasName="menu-fish">
     <img src={this.props.details.image}/>>
       <h3>{this.props.details.name}</h3> 
       <span className="price">{formatPrice(this.props.details.price)}</span>
       <span>{this.props.details.desc}</span>
       <button>Add to Order</button>
     </li>
    )
  } 
}

export default Fish;
