import { NEW_MEET, UPDATE_SCORES, SET_TEAMS_AND_SCORES } from './types';
import { meetSetup } from '../scripts/events';

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


//updates teams and scores when score and team picker changes
export const setTeamsAndScores = (teamsAndScoresArr) => dispatch => {
  dispatch({
      type: SET_TEAMS_AND_SCORES,
      payload: teamsAndScoresArr
  })    
}

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
