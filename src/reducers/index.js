// Set up your root reducer here...
 import { combineReducers } from 'redux';
 
 import labtests from './labtestReducer';
 
 import diagnosticcenters from './diagnosticcenterReducer';
 const rootReducer=combineReducers({
     labtests,
diagnosticcenters
 });

 export default rootReducer;