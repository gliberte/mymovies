import tipos from '../actions/tipos'

const initialState = {
    test: "Hola Mundo",
    fecha:new Date()
  };
  //funcion reducer:
  export default  (state = initialState, action) =>{
    switch (action.type) {
      case tipos.UPDATE_FECHA:
      return Object.assign({},state,{
        fecha:action.payload
      })
      default:
        return state;
    }
  }