export  const dodadiVrednost = (inputVrednost) =>{
    return {
        type: "ZGOLEMI",
        payload: inputVrednost
    }
}

export const namaliVrednost = (inputVrednost)=>{
    return {
        type:"NAMALI",
        payload: inputVrednost
    }
}