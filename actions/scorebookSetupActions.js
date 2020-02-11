import { NEW_MEET, UPDATE_SCORES, SET_TEAMS_AND_SCORES } from './types';
import { meetSetup } from '../scripts/events';
/*
export const scorebookSetup = (settings) => dispatch => {
  //number of teams console.log(settings[0])
  //individual scoring console.log(settings[1])
  //relay scoring console.log(settings[2])
  settings.push(places(settings[1]))
  settings.push(places(settings[2]))
  //console.log(settings[3]) //indy places
  //console.log(settings[4]) //team places
  dispatch({
      type: SCOREBOOK_SETUP,
      payload: settings
  })
};
*/
let places = (arr) => {
  let placesArr = []
  for (let i = 1; i <= arr.length; i++) {
    placesArr.push(i);
  }
  return placesArr;
}

export const updateScores = (data) => dispatch => {
  dispatch({
      type: UPDATE_SCORES,
      payload: data
  })
};

export const newMeet = (/*currentEventsArr, teamsAndScoresArr*/fullSetup) => dispatch => {
  let iteration = 0;
    let partialArray = []

    const singleIteration = () => { 
      let scoringIndex;
      partialArray.push(fullSetup[iteration])
      iteration++  
      return partialArray;
    }

    const recursiveIteration = () => { 
      let tempArray = singleIteration()
      if (tempArray.length === fullSetup.length) {
        /*    dispatch({
          type: NEW_MEET,
          payload: tempArray
      })  */
        return('all done...')
      } else if (tempArray.length <= fullSetup.length) {
        setTimeout(() => {
        /*    dispatch({
          type: NEW_MEET,
          payload: tempArray
      })  */
          recursiveIteration()
        },0)    
      } else {
        return('something went wrong')
      }
    }

    //recursiveIteration()
/*
  dispatch({
      type: NEW_MEET,
      payload: fullMeetSetupArray
  })  
*/  

dispatch({
  type:NEW_MEET,
  payload: fullSetup
})

} 

//updates teams and scores when score and team picker changes
export const setTeamsAndScores = (teamsAndScoresArr) => dispatch => {
  dispatch({
      type: SET_TEAMS_AND_SCORES,
      payload: teamsAndScoresArr
  })    
}


/*
export const newMeet = (fullSetup) => {
    let iteration = 0;
    let partialArray = []
    const singleIteration = () => { 
      let scoringIndex;
      partialArray.push(fullSetup[iteration])
      iteration++  
      return partialArray;
    }
    const recursiveIteration = () => { 
      let tempArray = singleIteration()
      if (tempArray.length === fullSetup.length) {
        return('all done...')
      } else if (tempArray.length <= fullSetup.length) {
        setTimeout(() => {
          newMeetDispatch(partialArray)  
          recursiveIteration()
        },0)    
      } else {
        return('something went wrong')
      }
    }
    recursiveIteration()
}
*/