export const initialState = {
    user: null,
    playlists : [],
    playing: false,
    item:null,
    top_fifty: null,
    //  token: 'BQCVUKd7NegXmU9rg9k5OZ0fHc7hP1E0bZi9rbMr6NdyYeS4nLO1RdpWpOw4Ye9XrVkI9lr9w0yRYnR6sv8EgHoubEvJZ8_WNAt7clV-JtsCwqHreZpfaeWXcMF18Z9_Cv2TZ9XLvVhJfDewJmBlRuVisX-gQXRTlVAzT7zJ1rwg-LCs'
}

 const reducer = (state=initialState, action) => {
    console.log(action)
    // Action is consist of => type, [payload]
    switch(action.type){
        case 'SET_USER':
           return {
                ...state,
                user : action.user
            }
        
        case 'SET_TOKEN':
            return{
                ...state,
                token : action.token
            }

        case 'SET_PLAYLIST':
            return{
                ...state,
                playlists:action.playlists
            }

        case 'SET_TOP_FIFTY':
            return{
                ...state,
                top_fifty: action.top_fifty
            }
        default:
            return state;
    }
}

export default reducer;