import React from 'react';
import Table from './Table';
import './Excel.css';



export default class Excel extends React.Component{
  
   
    render(){
        return (
            <div>
                <Table heads={this.props.heads} />
            </div>
        )
    };
}
