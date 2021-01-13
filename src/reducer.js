
export default function reducer(state, action) {
    if (action.type === 'loadPosts') {
        return {
            ...state,
            posts: action.payload
        }
        
    }
}