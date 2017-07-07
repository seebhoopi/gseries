// Set up your root reducer here...
 import { combineReducers } from 'redux';
 
 import labtests from './labtestReducer';
 
 
 const rootReducer=combineReducers({
     labtests
 });

 export default rootReducer;