import { GET_MAILS} from "../Actions/Types";

const mailReducer = (state={mails:[]},{type,payload})=>{
    switch(type){
        case GET_MAILS:
            return {...state,mails:payload}
        default: return state
    }
    
}
export default mailReducer