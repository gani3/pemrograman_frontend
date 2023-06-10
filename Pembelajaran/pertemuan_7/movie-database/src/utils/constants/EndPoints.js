const API_KEY = process.env.REACT_APP_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3/movie/'

const EndPoint = {
    POPULAR : `${BASE_URL}popular/?api_key=${API_KEY}`,
    NOWPLAYING : `${BASE_URL}now_playing/?api_key=${API_KEY}`,
    TOPRATED : `${BASE_URL}top_rated/?api_key=${API_KEY}`,
    DetailMovie(id){
        return `${BASE_URL}${id}?api_key=${API_KEY}&append_to_response=videos`;
    },
    RecomMovie(id){
        return `${BASE_URL}${id}/recommendations?api_key=${API_KEY}&append_to_response=videos`;
    }

}

export default EndPoint