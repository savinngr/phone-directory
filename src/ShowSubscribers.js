import React, { Component } from 'react';
import Header from './Header';
import './ShowSubscribers.css';
import {Link} from 'react-router-dom';

class ShowSubscribers extends Component {


  onDeletedClick = (id) => {
    this.props.deleteSubscriberHandler(id);
  }

  render() {
    return (
      <div className="component-container">
        <Header heading="Phone Directory"/>
        <div className="component-body-container">
          <Link to="/add"><button className="custom-btn add-btn">Add</button></Link>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>

        {
          this.props.subscriberList.map(subs=> {
                return <div key={subs.id} className="grid-container">
                <span className="grid-item">{subs.name}</span>
                <span className="grid-item">{subs.number}</span>  
                <span className="grid-item action-btn-container">
                  <button className="custom-btn delete-btn" onClick={this.onDeletedClick.bind(this,subs.id)}> Delete </button>
                </span>
              </div>        
          })
        }

        </div>
      </div>  
    );
  }
}

export default ShowSubscribers;

