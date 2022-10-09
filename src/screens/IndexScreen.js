import React, {useContext} from 'react';
import {View, Text, StyleSheet, FlatList, Button} from 'react-native';
import {Context} from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

const IndexScreen = ({navigation}) => {
    //This is the value prop used in BlogContext
    const {state, deleteBlogPost} = useContext(Context);
    return (
        <View>
            {/* <Button title="Add Post" onPress={addBlogPost("title", "content")}/> */}
            <FlatList 
                data = {state}
                keyExtractor = {blogPost => blogPost.id}
                renderItem = {({item}) => <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})}>
                        <View style={styles.row}>
                            <Text style={styles.title}>{item.title}</Text>
                            <TouchableOpacity onPress={() => {deleteBlogPost(item.id)}}>
                                <Feather style={styles.icon} name="trash-2" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                }
            />
        </View>
    )
}

//When IndexScreen is displayed by react-navigation, 
//it will automatically call the function in navigationOptions
//The function returns an object which is used to customize the display. 
//We can customize the header here. 
IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (
                    <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                        <AntDesign name="plus" size={24} color="black" />
                    </TouchableOpacity>
        )
                
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: 'gray',
        paddingHorizontal: 10
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
});

export default IndexScreen;