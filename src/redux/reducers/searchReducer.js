import tipos from '../actions/tipos'

const initialState = {
    data:[],
    text:""
}

export default (state=initialState,action)=>{
    switch (action.type) {
        case tipos.GET_BUSQUEDA_FULFILLED:
            return Object.assign({},state,{
                data:action.payload.data.results,
                text:action.text
            })
        case tipos.CLEAR_SEARCH:
            return Object.assign({},state,{
                data:[]
            })
            
           
    
        default:
            return state
    }
}