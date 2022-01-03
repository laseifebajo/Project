import React from 'react';
import { Stats } from './stats';
import axios from 'axios';

export class Premstats extends React.Component {
//The bind() method allows an object to borrow a method from another object without making a copy of that method. This is known as function borrowing in JavaScript.
    constructor(){
        super();

        this.ReloadData = this.ReloadData.bind(this);
    }

    state = {
        stats: []

    };
    //The componentDidMount() method allows us to execute the React code when the component is already placed in the DOM (Document Object Model). This method is called during      the Mounting phase of the React Life-cycle i.e after the component is rendered.
    componentDidMount() {
        axios.get('http://localhost:4000/api/stats')
            .then((response) => {
                    this.setState({ stats: response.data})
                })
            .catch(
                (error)=>{
                    console.log(error)
                });
    }
    //here the reload data Reloads the rows and sections of the table view.
    ReloadData(){
        axios.get('http://localhost:4000/api/stats')
        .then((response) => {
                this.setState({ stats: response.data})
            })
        .catch(
            (error)=>{
                console.log(error)
            });
    }


    render() {
        return (
            <div>
                <h1>Here are the stats you entered about different players.</h1>
                <br></br>
                <br></br>
                <Stats stats={this.state.stats} ReloadData={this.ReloadData}></Stats>
            </div>
        );
    }
}
