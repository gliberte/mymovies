import tipos from './tipos'
import axios from 'axios'

const urlBase = 'https://api.themoviedb.org/3/movie/'
const urlBaseSearch = 'https://api.themoviedb.org/3/search/'
const key = 'd132c8b7351c4c050ee5023941590be8'

export const getEstrenos = ()=>dispatch=>{
    dispatch({
        type:tipos.GET_ESTRENOS,
        payload:axios.get(`${urlBase}now_playing?api_key=${key}&language=es`)
    })
}

export const getProximosEstrenos = ()=>dispatch=>{
    dispatch({
        type:tipos.GET_PROXIMOS_ESTRENOS,
        payload:axios.get(`${urlBase}upcoming?api_key=${key}&language=es`)
    })
}

export const getCreditos = peliculaid =>dispatch=>{
    dispatch({
        type:tipos.GET_CREDITOS,
        payload:axios.get(`${urlBase}${peliculaid}/credits?api_key=${key}&language=es`)
    })
}
export const getPeliculaDetalles = peliculaid =>dispatch=>{
    dispatch({
        type:tipos.GET_PELICULA_DETALLES,
        payload:axios.get(`${urlBase}${peliculaid}?api_key=${key}&language=es`)
    })
}

export const getBusqueda = text =>dispatch=>{
    dispatch({
        type:tipos.GET_BUSQUEDA,
        payload:axios.get(`${urlBaseSearch}movie?query=${text}&api_key=${key}&language=es`),
        
    })
}
export const clearSearch = ()=>{
    return {
        type:tipos.CLEAR_SEARCH
    }
}