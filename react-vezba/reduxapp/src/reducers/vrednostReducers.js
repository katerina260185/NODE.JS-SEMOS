const initialState = {pocetnaVrednost:0};

export const vrednostReducer = (state = initialState, action)=>{
    switch (action.type){
        case "ZGOLEMI": {
            return {...state, pocetnaVrednost:state.pocetnaVrednost + 1 }
        }
        case "NAMALI": {
            return {...state, pocetnaVrednost:state.pocetnaVrednost - 1}
        }
        case "DODADI_MOMENTALNA_VREDNOST":{
            return {...state, pocetnaVrednost:state.pocetnaVrednost + Number((action.payload)) }
        }
        case "DODADI_INPUT_VREDNOST":{
        return { ...state, pocetnaVrednost:state.pocetnaVrednost + Number((action.payload)) }
    }
        default:{
            return state
        }
    }
}