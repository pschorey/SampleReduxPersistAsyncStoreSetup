import { SET_VIEW, SCORING_AND_TEAMS_SETUP, SCOREBOOK } from '../actions/types';
  
const initialState = { 
	view: SCOREBOOK
}

export default function(state = initialState, action) {
	switch(action.type) {
		case SET_VIEW:
			return {
				...state,
				view: action.payload
			}		
		default:	
			return state;
	}
}