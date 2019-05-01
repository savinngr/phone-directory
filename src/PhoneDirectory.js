import React, {Component} from 'react';
import AddSubscribers from './AddSubscriber';
import ShowSubscriber from './ShowSubscribers'


class PhoneDirectory extends Component{

    constructor(){
        super();
        this.state = {
            subscribersList: [{
                id:1,
                name:'savin',
                phone:'7777777'
            },
            {
                id:2,
                name:'suhani',
                phone:'888888888'
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
        console.log("Phone Directory");
        console.log(this.state.subscribersList);
    }

    render(){
        return(
            //<AddSubscribers addSubscriberHandler={this.addSubscriberHandler}/>
            <ShowSubscriber subscriberList={this.state.subscribersList} />
        )
    }
}

export default PhoneDirectory