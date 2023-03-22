export const depositBalance = (value)=>{
    return {
        type: "DEPOSIT",
        payload: value
    }
}
export const depositBalanceAsync = (value) =>{
    return (dispatch)=> {
        setTimeout(()=> {
            console.log("dispatching action")
            dispatch(depositBalance(value))
        },5000)
    }
}



export const withdrawBalance = (value)=>{
    return {
        type: "WITHRAW",
        payload: value
    }
}