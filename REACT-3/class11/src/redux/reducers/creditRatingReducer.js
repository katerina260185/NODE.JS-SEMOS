const initialState = {creditRating:100};

export const creditReducer = (state=initialState, action) => {
    switch(action.type) {
        case "CHANGE CREDIT_RATING": {
            return {...state, creditRating:action.payload}
           /* return {...state, creditRating:state.creditRating + Number(action.payload) }*/
        }
        default:{
           return state;
        } 
    }
}