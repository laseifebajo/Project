import React from 'react';
import { Stats } from './stats';
import axios from 'axios';

export class Premstats extends React.Component {

    constructor(){
        super();

        this.ReloadData = this.ReloadData.bind(this);
    }

    state = {
        stats: []

    };

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
