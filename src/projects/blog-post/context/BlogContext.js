import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return [...state, {
                id: Math.floor(Math.random() * 99999),
                title: action.payload.title,
                content: action.payload.content 
            }];
        case 'delete':
            return state.filter((blogPost) => blogPost.id !== action.payload);
        case 'edit':
            return state.map((blogPost) => {
                if (blogPost.id === action.payload.id) {
                    return action.payload;
                } else {
                    return blogPost;
                }
            });
        default:
            return state;
    }
}

const addBlogPost = dispatch => {
    return (title, content, callback) => {
        dispatch({ type: 'add', payload: { title, content } });
        if (callback) {
            callback();
        }
    }
}

const deleteBlogPost = dispatch => {
    return (id) => {
        dispatch({ type: 'delete', payload: id});
    }
}

const editBlogPost = dispatch => {
    return (id, title, content, callback) => {
        dispatch({ type: 'edit', payload: { id, title, content }});
        if (callback) {
            callback();
        }
    }
}

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, deleteBlogPost, editBlogPost }, [])