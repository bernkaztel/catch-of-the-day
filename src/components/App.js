import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
  constructor(){
    //always before using this
    super();
    this.addFish = this.addFish.bind(this);
    //this is the initial state
    this.state={
      fishes: {

      },
      order: {

      }
    }
  }
  //to add another fish to the state
  addFish(fish){
    //first take a copy of the state
    //... is a spread: it will take every item from an object and spread it to an object
    const fishes = (this.state.fishes)
    console.log(fishes)
    //second we add our second fish 
    //we use a time stamp as a key to the fishes 
    const timeStamp = Date.now();
    fishes[`fish${timeStamp}`] = fish;
    console.log(fish)
    //thrid we update our state
    this.setState({ fishes });
  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    )
  }
}

export default App;
