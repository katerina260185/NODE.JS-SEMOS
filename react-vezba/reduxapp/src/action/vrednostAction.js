
export const dodadiVrednost = () => {
    return {
        type: "ZGOLEMI",    
    }
}

export const namaliVrednost = () => {
    return {
        type: "NAMALI",
    }
}

export const dodadiMomentalnaVrednost = (momentalnaVrednost) => {
    return {
        type: "DODADI_MOMENTALNA_VREDNOST",
        payload:momentalnaVrednost
    }
}

export const dodadiInputVrednost = (inputVrednost)=> {
    return {
    type: "DODADI_INPUT_VREDNOST",
    payload: inputVrednost
    }
}


export const dodadiVrednostAsync = (inputVrednost) => {
    return (dispatch)=> {
        setTimeout(()=> {
            console.log("nesto")
            dispatch(dodadiInputVrednost(inputVrednost))
        },3000)
    }
}