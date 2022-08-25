import { combineReducers } from "redux";
import usersAcc from "./usersReducer";
import singleInfo from './singleReducer';
export default combineReducers({
    allUsers:usersAcc,
    
    userData: singleInfo,
  

})
