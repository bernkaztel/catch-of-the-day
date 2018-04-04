import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from "./Fish";
import base from "../base";

class App extends React.Component {
  constructor(){
    //always before using this
    super();
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
    //this is the initial state
    this.state={
      fishes: {},
      order: {}
    }
  }
  componentWillMount(){
    //TODO: Revisar el routing y colocar el id que corresponde ({$this.props.params.storeId}/fishes)
   this.ref = base.syncState(`my-store`
   ,{
     context: this,
     state: 'fishes'
   });
  }
  addToOrder(key){
//copy 
const order = (this.state.order);
//new order
order[key] = order[key] +1 || 1;
//update the state
this.setState({order});
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
            .map(key => <Fish  key={key} index={key}  addToOrder={this.addToOrder} details={this.state.fishes[key]}/>)
          }
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order}/>
        <Inventory addFish={this.addFish}  loadSamples={this.loadSamples}/>
      </div>
    )
  }
}

export default App;
