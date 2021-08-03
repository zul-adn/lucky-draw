const initState = {
    datas:[],
    isRegisterSubmit: true
}

export default (state = initState, action) => {
    switch(action.type){
        case 'STORE_DATAS' : 
            return{
                ...state,
                datas: action.datas
            }
        case 'REGISTER_SUBMIT' : 
            return{
                ...state,
                isRegisterSubmit: true
            }
        case 'RESET_DETAIL' : 
            return{
                ...state,
                datas_detail: []
            }
        default:
            return state
    }
}