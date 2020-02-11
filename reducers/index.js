import { combineReducers } from 'redux';

// Imports: Reducers
import scorebookSetupReducer from './scorebookSetupReducer'; 
import view from './viewReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
	scorebookSetup: scorebookSetupReducer,
	view: view
});

// Exports
export default rootReducer;