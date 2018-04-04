import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";

class App extends React.Component {
  constructor() {
    //always before using this
    super();
    this.addFish = this.addFish.bind(this);
    this.removeFish = this.removeFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
    this.updateFish = this.updateFish.bind(this);
    this.removeFromOrder = this.removeFromOrder.bind(this);
    //this is the initial state
    this.state = {
      fishes: {},
      order: {}
    };
  }
  //When the component is about to mount this checks the database in firebase
  componentWillMount() {
    //TODO: Revisar el routing y colocar el id que corresponde ({$this.props.params.storeId}/fishes)
    this.ref = base.syncState(`my-store`, {
      context: this,
      state: "fishes"
    });

    //check if there's an order in local storage
    const localStorageRef = localStorage.getItem("order-mystore");
    const order = this.state.order;
    if (localStorageRef) {
      this.setState({
        order: JSON.parse(localStorageRef)
      });
    } else {
      this.setState({ order });
    }
  }
  //Eveytime the component update
  //this will always have nextProps as a parameter
  componentWillUpdate(nextProps, nextState) {
    //TODO: Revisar routing y colocar store id
    localStorage.setItem("order-mystore", JSON.stringify(nextState.order));
  }

  addToOrder(key) {
    //copy
    const order = this.state.order;
    //new order
    order[key] = order[key] + 1 || 1;
    //update the state
    this.setState({ order });
  }
  removeFromOrder(key) {
    const order = this.state.order ;
    delete order[key];
    this.setState({ order });

  }
  //to add another fish to the state
  addFish(fish) {
    //first take a copy of the state
    //... is a spread: it will take every item from an object and spread it to an object
    const fishes = this.state.fishes;
    console.log(fishes);
    //second we add our second fish
    //we use a time stamp as a key to the fishes
    const timeStamp = Date.now();
    fishes[`fish${timeStamp}`] = fish;
    console.log(fish);
    //thrid we update our state
    this.setState({ fishes });
  }
  updateFish(key, updateFish) {
    const fishes = this.state.fishes;
    fishes[key] = updateFish;
    this.setState({ fishes });
  }
  //to load fishes sample
  loadSamples() {
    this.setState({
      fishes: sampleFishes
    });
  }
  removeFish(key) {
    const fishes = this.state.fishes;
    fishes[key] = null;
    this.setState({ fishes });
  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="list-of-fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                addToOrder={this.addToOrder}
                details={this.state.fishes[key]}
              />
            ))}
          </ul>
        </div>
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
          removeFromOrder={this.removeFromOrder}
          params={this.props.params}
        />
        <Inventory
          addFish={this.addFish}
          removeFish={this.removeFish}
          loadSamples={this.loadSamples}
          fishes={this.state.fishes}
          updateFish={this.updateFish}
        />
      </div>
    );
  }
}



export default App;
