import React, {useReducer} from "react";
import { startMapper } from "react-native-reanimated/lib/reanimated2/core";
import createDataContext from "./createDataContext";

function blogReducer(state, action) {
    switch(action.type) {
        case 'add_blogpost': 
            return [...state, {
                id: Math.floor(Math.random() * 99999),
                title: action.payload.title,
                content: action.payload.content
            }]

        case 'delete_blogpost': 
            return state.filter((blogPost) => blogPost.id !== action.payload)
        
        case 'edit_blogpost': 
            // return state;
            const st = state.map((blogPost) => blogPost.id === action.payload.id ? action.payload : blogPost)
            console.log("updated ", st);
            return st;

        default: 
            return state;
    }

}

function addBlogPost (dispatch) {
    return (title, content, callback) => {
        dispatch({type: 'add_blogpost', payload: {title, content}})
        if (callback)
            callback();
    }
}

function deleteBlogPost (dispatch) {
    return (id) => {
        dispatch({type: 'delete_blogpost', payload: id})
    }
}

function editBlogPost (dispatch) {
    return (id, title, content, callback) => {
        dispatch({type: 'edit_blogpost', payload: {id, title, content}})
        if (callback)
            callback();
    }
}

export const {Context, Provider} = createDataContext(blogReducer, {addBlogPost, deleteBlogPost, editBlogPost}, []);