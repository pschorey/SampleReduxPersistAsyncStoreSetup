import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { updateScores } from '../actions/scorebookSetupActions';


class DataUpdater extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    this.swapData  = this.swapData.bind(this)
  }

 swapData () { 
  let incr = 0; 
  let toggleData = () => {
    let data0 = [ [ 'home', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '' ],
      [ 'awy1', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '' ],
      [ 'awy2', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '' ],
      [ 'awy3', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '' ],
      [ 'awy4', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '' ],
      [ 'awy5', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '' ],
      [ 'awy6', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '' ],
      [ 'awy7', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '' ] ]
    let data1 = [ [ 'home', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '' ],
      [ 'awy1', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '' ],
      [ 'awy2', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '' ], ]
    if (incr === 0) {
      this.props.updateScores(data0);      
    } else {
      this.props.updateScores(data1);
    }
    incr++
    if (incr > 1) {
      incr = 0;
    }
  }
   setInterval(toggleData, 4000) 
 }

  componentDidMount() {
    //this.swapData();
  }
 
  render() {
    return (
      <View></View>
    )
  }
}
 


const mapStateToProps = state => ({
  truncatedCurrentEvents: state.scorebookSetup.truncatedCurrentEvents,
  truncatedCurrentEventsByGender: state.scorebookSetup.truncatedCurrentEventsByGender,
  currentGenderDisplay: state.scorebookSetup.currentGenderDisplay
});

export default connect(mapStateToProps, { updateScores })(DataUpdater);
