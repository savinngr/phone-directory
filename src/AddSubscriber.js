import React, { Component } from 'react';
import Header from "./Header";
import './AddSubscriber.css';

class AddSubscriber extends Component {
    render() {
        return (
            <div>
                <Header heading='Add Subscriber' />
                <div class='component-body-container'>
                    <button class="custom-btn"> Back </button>
                    <form className="subscriber-form">
                        <label htmlFor='name' className='label-control'>Name :</label><br />
                        <input type='text' id='name' className='input-control' name='name' /><br /><br />
                        <label htmlFor='phone' className='label-control'>Phone :</label><br />
                        <input type='text' id='phone' className='input-control' name='name' /><br /><br />
                        <div>
                            <span className='subscriber-to-add-heading'>Subscriber to be added : </span><br/>
                            <span className='subscriber-info'>Name : </span><br />
                            <span className='subscriber-info'>Phone : </span><br />
                        </div>
                        <button type='submit' className='custom-btn add-btn'>Add</button>
                    </form>
                </div>


                </div>
                )
            }
        }
        
export default AddSubscriber;