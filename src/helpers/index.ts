export const IMGPATH:string = "https://image.tmdb.org/t/p/w1280";

export const IMG_DEFAULT = "https://res.cloudinary.com/dwsmc6rqr/image/upload/v1657729030/movie-2_hkgd1c.jpg"

export const BASE_URL:string = "https://api.themoviedb.org/3/";

const SEARCH:string = "search/movie";


const QUERY:string = "&query="

export const PAGES:string = "&page="

const POPULAR:string = "discover/movie?sort_by=popularity.desc"

export const SEARCH_URL:string = `${BASE_URL}${SEARCH}?${import.meta.env.VITE_API_KEY}${QUERY}`

export const POPULAR_RESULTS:string = `${BASE_URL}${POPULAR}${import.meta.env.VITE_API_KEY}${PAGES}`

export const GENRES_RESULTS:string = `${BASE_URL}genre/movie/list${import.meta.env.VITE_API_KEY_v2}`