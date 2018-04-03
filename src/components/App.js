import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes'
import Fish from "./Fish"

class App extends React.Component {
  constructor(){
    //always before using this
    super();
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
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
  //to load fishes sample 
  loadSamples(){
    this.setState({
      fishes:sampleFishes
    })
  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="list-of-fishes">
          {
            Object.keys(this.state.fishes)
            .map(key => <Fish  key={key} details={this.state.fishes[key]}/>)
          }
          </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish}  loadSamples={this.loadSamples}/>
      </div>
    )
  }
}

export default App;
