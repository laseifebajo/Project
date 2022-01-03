import React from 'react';
import { Statsinfo } from './statsinfo';

export class Stats extends React.Component{
//the mapping here is  used to iterate over an array and calling function on every element of array.
    render(){
        return this.props.stats.map((stat) =>{
            return <Statsinfo stat={stat} ReloadData={this.props.ReloadData}></Statsinfo>
        
        })
           
      
            
    }
}
