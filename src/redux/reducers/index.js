import {combineReducers} from 'redux'
import test from './testReducer'
import estrenos from './estrenosReducer'
import proximos_estrenos from './proximosEstrenosReducer'

import creditos from './creditosReducer'
import pelicula_detalles from './peliculaDetallesReducer'

export default combineReducers({
    test,estrenos,
    proximos_estrenos,
    creditos,
    pelicula_detalles
})