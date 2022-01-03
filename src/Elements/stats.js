import React from 'react';
import { Statsinfo } from './statsinfo';

export class Stats extends React.Component{

    render(){
        return this.props.stats.map((stat) =>{
            return <Statsinfo stat={stat} ReloadData={this.props.ReloadData}></Statsinfo>
        
        })
           
      
            
    }
}