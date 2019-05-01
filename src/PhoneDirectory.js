import React, {Component} from 'react';
import AddSubscribers from './AddSubscriber';
import ShowSubscriber from './ShowSubscribers'
import {BrowserRouter as Router, Route} from 'react-router-dom';


class PhoneDirectory extends Component{

    constructor(){
        super();
        this.state = {
            subscribersList: [{
                id:1,
                name:'savin',
                number:'7777777'
            },
            {
                id:2,
                name:'suhani',
                number:'888888888'
            }
            ]
        }
    }

    addSubscriberHandler = (newSubscriber) =>{
        let subscriberList = this.state.subscribersList;
        if(subscriberList.length>0){
            newSubscriber.id = subscriberList[subscriberList.length -1].id + 1;
        }
        else{
            newSubscriber.id = 1;
        }

        subscriberList.push(newSubscriber);
        this.setState({subscribersList : subscriberList});
    }

    render(){
        return(
            <Router>
                <Route exact path='/' render={(props) => <ShowSubscriber {...props} subscriberList={this.state.subscribersList} />} />
                <Route exact path='/add' render={({history}, props) => <AddSubscribers history={history} {...props} addSubscriberHandler={this.addSubscriberHandler} />} />
            </Router>
        )
    }
}

export default PhoneDirectory