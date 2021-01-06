import React from 'react';
import { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowBlogScreen = ({ navigation }) => {
    const { state } = useContext(Context);
    const blogPost = state.find((blog) => blog.id === navigation.getParam('id'))

    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    );
}

ShowBlogScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('CreateBlog', { id: navigation.getParam('id')})}>
            <EvilIcons name="pencil" size={30} />
          </TouchableOpacity>
        ),
    };
}

const styles = StyleSheet.create({});

export default ShowBlogScreen;