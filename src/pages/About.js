import React from 'react';
import {Link} from 'react-router';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import $ from 'jquery';
import _ from 'lodash';

export default class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      boostPrices: {}
    }
  }

  render(){
    return(
      <h1>About Me</h1>
    )
  }

}
