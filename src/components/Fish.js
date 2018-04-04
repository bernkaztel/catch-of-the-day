import React from 'react';
import {formatPrice } from '../helpers'

class Fish extends React.Component {
  render() {
    const isAvailable = this.props.details.status === 'available'
    const buttonText = isAvailable ? 'Add to Order' : 'Sold out';
    return (
     <li className="menu-fish">
     <img src={this.props.details.image}/>
       <h3>{this.props.details.name}</h3> 
       <span className="price">{formatPrice(this.props.details.price)}</span>
       <span>{this.props.details.desc}</span>
       <button disabled={!isAvailable} onClick={ () => this.props.addToOrder(this.props.index)} >{buttonText}</button>
     </li>
    )
  } 
}


export default Fish;
