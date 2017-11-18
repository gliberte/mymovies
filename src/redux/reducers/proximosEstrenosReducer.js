import tipos from '../actions/tipos'

const initialState = {
    data:[]
}

export default (state=initialState,action)=>{
    switch (action.type) {
        case tipos.GET_PROXIMOS_ESTRENOS_FULFILLED:
            return Object.assign({},state,{
                data:action.payload.data.results
            })
            
            
    
        default:
            return state
    }
}