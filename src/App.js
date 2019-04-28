import React, { Component } from 'react';
import Header from './Header';
import './App.css';


class App extends Component {

  constructor(){
    super();
    this.state = {
      subscribersListToShow: []
    }
  }

  // clickHandler(msg) {
  //   alert(msg+" Clicked" );
  // }

  render() {
    // let subscribers=[
    // //   {
    // //     id:1,
    // //     name:'savin',
    // //     number:'888888'
    // //   },

    // //   {
    // //     id:2,
    // //     name:'suhani',
    // //     number:'999999'
    // //   }

    // // ]
    return (
      <div className="component-container">
        <Header heading="Phone Directory"/>
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>

        {
          this.state.subscribersListToShow.map(subs=> {
                return <div key={subs.id} className="grid-container">
                <span className="grid-item">{subs.name}</span>
                <span className="grid-item">{subs.number}</span>
                <span className="grid-item action-btn-container">
                  <button className="custom-btn delete-btn" onClick={this.clickHandler.bind(this,subs.name)}> Delete </button>
                </span>
              </div>        
          })
        }

        </div>
      </div>
    );
  }
}

export default App;

