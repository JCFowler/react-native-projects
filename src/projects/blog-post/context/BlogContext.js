import jsonServer from '../api/jsonServer';
import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'get_all':
            return action.payload;
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

const getBlogPosts = dispatch => {
    return async () => {
        const response = await jsonServer.get('/blogposts');

        dispatch({ type: 'get_all', payload: response.data });
    }
}

const addBlogPost = dispatch => {
    return async (title, content, callback) => {
        await jsonServer.post('/blogposts', { title, content });
        // dispatch({ type: 'add', payload: { title, content } });
        if (callback) {
            callback();
        }
    }
}

const deleteBlogPost = dispatch => {
    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`);
        dispatch({ type: 'delete', payload: id});
    }
}

const editBlogPost = dispatch => {
    return async (id, title, content, callback) => {
        await jsonServer.put(`/blogposts/${id}`, { title, content });
        dispatch({ type: 'edit', payload: { id, title, content }});
        if (callback) {
            callback();
        }
    }
}

export const { Context, Provider } = createDataContext(blogReducer,
    { getBlogPosts, addBlogPost, deleteBlogPost, editBlogPost }, [])