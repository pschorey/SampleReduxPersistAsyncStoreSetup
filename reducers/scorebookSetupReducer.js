import { NEW_MEET, UPDATE_SCORES, SET_TEAMS_AND_SCORES } from '../actions/types';
import { defaultEvents, extraEvents, truncateEvents, displayEventByGender, meetSetup } from '../scripts/events';
  
const initialState = { 
	/*
	teams: 2,
	individualScoring: [5,3,1],
	relayScoring: [5,0],
	individualPlacing: [1,2,3],
	relayPlacing: [1,2],
	scorebookGenderOptions: 2, //0 === Male, 1 === Female, 2 === Male & Female
	currentGenderDisplay: 1, //score by gender, or possibly events by gender

	defaultEvents: defaultEvents, // will be user local storage from last meet once they save
	extraEvents: extraEvents, // will be all the unused events from user's last save
	*/
	teamsAndScores: [2, [5,3,1], [5,0]],
	currentEvents: defaultEvents, // || localstoarge..... set to default events for now...
	truncatedCurrentEvents: truncateEvents(defaultEvents), // this.currentEvents
	truncatedCurrentEventsByGender: truncateEvents(displayEventByGender(1, defaultEvents)),
	teamScoresData: [ [ 'Home', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '' ], [ 'Away', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '' ]],
	emptyMeet: [
		[["1", "", "", "", "5"], ["2", "", "", "", "0"]], [["1", "", "", "", "5"], ["2", "", "", "", "0"]], 

		[["1", "", "", "", "5"], ["2", "", "", "", "3"], ["3", "", "", "", "1"]], 

		[["1", "", "", "", "5"], ["2", "", "", "", "3"], ["3", "", "", "", "1"]],

		 [["1", "", "", "", "5"], ["2", "", "", "", "3"], ["3", "", "", "", "1"]], [["1", "", "", "", "5"], ["2", "", "", "", "3"], ["3", "", "", "", "1"]], [["1", "", "", "", "5"], ["2", "", "", "", "3"], ["3", "", "", "", "1"]], [["1", "", "", "", "5"], ["2", "", "", "", "3"], ["3", "", "", "", "1"]], [["1", "", "", "", "5"], ["2", "", "", "", "0"]], [["1", "", "", "", "5"], ["2", "", "", "", "0"]], [["1", "", "", "", "5"], ["2", "", "", "", "3"], ["3", "", "", "", "1"]], [["1", "", "", "", "5"], ["2", "", "", "", "3"], ["3", "", "", "", "1"]], [["1", "", "", "", "5"], ["2", "", "", "", "3"], ["3", "", "", "", "1"]], [["1", "", "", "", "5"], ["2", "", "", "", "3"], ["3", "", "", "", "1"]], [["1", "", "", "", "5"], ["2", "", "", "", "3"], ["3", "", "", "", "1"]], [["1", "", "", "", "5"], ["2", "", "", "", "3"], ["3", "", "", "", "1"]], [["1", "", "", "", "5"], ["2", "", "", "", "3"], ["3", "", "", "", "1"]], [["1", "", "", "", "5"], ["2", "", "", "", "3"], ["3", "", "", "", "1"]], [["1", "", "", "", "5"], ["2", "", "", "", "3"], ["3", "", "", "", "1"]], [["1", "", "", "", "5"], ["2", "", "", "", "3"], ["3", "", "", "", "1"]], [["1", "", "", "", "5"], ["2", "", "", "", "0"]], [["1", "", "", "", "5"], ["2", "", "", "", "0"]], [["1", "", "", "", "5"], ["2", "", "", "", "3"], ["3", "", "", "", "1"]], [["1", "", "", "", "5"], ["2", "", "", "", "3"], ["3", "", "", "", "1"]], [["1", "", "", "", "5"], ["2", "", "", "", "3"], ["3", "", "", "", "1"]], [["1", "", "", "", "5"], ["2", "", "", "", "3"], ["3", "", "", "", "1"]], [["1", "", "", "", "5"], ["2", "", "", "", "3"], ["3", "", "", "", "1"]], [["1", "", "", "", "5"], ["2", "", "", "", "3"], ["3", "", "", "", "1"]], [["1", "", "", "", "5"], ["2", "", "", "", "3"], ["3", "", "", "", "1"]], [["1", "", "", "", "5"], ["2", "", "", "", "3"], ["3", "", "", "", "1"]], [["1", "", "", "", "5"], ["2", "", "", "", "3"], ["3", "", "", "", "1"]], [["1", "", "", "", "5"], ["2", "", "", "", "3"], ["3", "", "", "", "1"]]]//meetSetup(defaultEvents, [2, [5,3,1], [5,0]]) //array = [currentEvents, [teamnumbers, [individualScoring], [relayScoring]]]*/
}



export default function(state = initialState, action) {
	switch(action.type) {
		case NEW_MEET:
			return {
				...state,
				emptyMeet: action.payload
			}
		case SET_TEAMS_AND_SCORES:
			return {
				...state,
				teamsAndScores: action.payload
			}			
		case UPDATE_SCORES:
			return {
				...state,
				teamScoresData: action.payload
			}		
		default:	
			return state;
	}
}