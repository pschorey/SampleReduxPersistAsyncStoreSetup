import { NEW_MEET, UPDATE_SCORES, SET_TEAMS_AND_SCORES } from '../actions/types';
import { defaultEvents, extraEvents, truncateEvents, displayEventByGender, meetSetup } from '../scripts/events';
  
const initialState = { 
	teamsAndScores: [2, [5,3,1], [5,0]],
	currentEvents: defaultEvents, // || localstoarge..... set to default events for now...
	truncatedCurrentEvents: truncateEvents(defaultEvents), // this.currentEvents
	truncatedCurrentEventsByGender: truncateEvents(displayEventByGender(1, defaultEvents)),
	teamScoresData: [ [ 'Home', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '' ], [ 'Away', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '' ]],
	emptyMeet: []
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