import React, {useContext} from "react";
import {StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext';
import BlogPostForm from "../components/BlogPostForm";


function CreateScreen({navigation}) {
    const {addBlogPost} = useContext(Context);
    return <BlogPostForm onSubmit={(title, content) => {
        addBlogPost(title, content, () => {
            navigation.navigate('Index');   //Instead of navigating directly, we are doing it inside a callback. This is because, if addBlogPost makes a network request, we want to wait until the network request is finished
        }) 
    }} />
}

const styles = StyleSheet.create({

}) 

export default CreateScreen;
