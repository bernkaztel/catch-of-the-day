import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
   constructor() {
     super();
     this.goToStore = this.goToStore.bind(this);
   }
  goToStore(event){
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. get the text from that input
    const storeId = this.storeInput.value;
    // 3. Change the page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeId}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()} ref={(input) => { this.storeInput = input}}
        />
        <button type="submit">Visit Store →</button>
      </form>
    )
  }
}


// StorePicker.contextTypes = {
//   router: React.PropTypes.object
// }

export default StorePicker;
