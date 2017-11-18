import tipos from '../actions/tipos'

const initialState = {
    data:[]
}

export default (state=initialState,action)=>{
    switch (action.type) {
        case tipos.GET_PELICULA_DETALLES_FULFILLED:
            return Object.assign({},state,{
                data:action.payload.data
            })
            
            
    
        default:
            return state
    }
}