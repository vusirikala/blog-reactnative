import React, {useState, useContext} from "react";
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import {Context} from '../context/BlogContext';

function CreateScreen({navigation}) {
    const {addBlogPost} = useContext(Context);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState(''); 

    return <View>
        <Text style={styles.label}>Enter Title: </Text>
        <TextInput style={styles.input} value={title} onChangeText={text => setTitle(text)}/>
        <Text style={styles.label}>Enter Content: </Text>
        <TextInput style={styles.input} value={content} onChangeText={text => setContent(text)}/>
        <Button title="Add Blog Post" onPress={() => {
            addBlogPost(title, content, () => {
                navigation.navigate('Index');   //Instead of navigating directly, we are doing it inside a callback. This is because, if addBlogPost makes a network request, we want to wait until the network request is finished
            }) 
        }} />
    </View>;
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin:5,
    },
    label: {

        fontSize: 20,
        marginBottom: 10,
        marginLeft: 5
    }
}) 

export default CreateScreen;
