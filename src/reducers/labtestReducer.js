import ActionTypes from '../constants/actionTypes';

export default function labtestReducer(state = [], action) {debugger;
    switch (action.type) {
        case ActionTypes.LOAD_LABTESTS_SUCCESS:
            return action.labtests;

   
        case ActionTypes.CREATE_LABTESTS_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.labtest)
            ];

        case ActionTypes.UPDATE_LABTESTS_SUCCESS:
            return [
                 Object.assign({}, action.labtest),...state.filter(labtest => labtest._id !== action.labtest._id)
               
            ];
        case ActionTypes.DELETE_LABTESTS_SUCCESS:

            return [
                ...state.filter(labtest => labtest._id !== action.labtestId)
            ];  
    


        default:
            return state;
    }

}