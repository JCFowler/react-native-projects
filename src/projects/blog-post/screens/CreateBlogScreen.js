import React from 'react';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const CreateBlogScreen = ({ navigation }) => {
    const { state, addBlogPost, editBlogPost } = useContext(Context);
    const [ screenText, setScreenText ] = useState({ title: 'Create', titleText: 'Enter Title:', contentText: 'Enter Content:', btn: 'Add Blog Post'});
    const [ title, setTitle ] = useState('');
    const [ content, setContent ] = useState('');

    const btnPress = () => {
        if (navigation.getParam('id')) {
            editBlogPost(navigation.getParam('id'), title, content, () => {
                navigation.pop();
            });
        } else {
            addBlogPost(title, content, () => {
                navigation.navigate('BlogPostHome');
            });
        }
    }

    useEffect(() => {
        const id = navigation.getParam('id');
        if (id) {
            setScreenText({ title: 'Edit', titleText: 'Enter New Title:', contentText: 'Enter New Content:', btn: 'Save Blog Post'});
            const blogPost = state.find((blog) => blog.id === navigation.getParam('id'));
            setTitle(blogPost.title);
            setContent(blogPost.content);
        }
    }, [])

    return (
        <View style={{ marginTop: 15 }}>
            <Text style={styles.screenTitle}>{screenText.title}</Text>
            <Text style={styles.label}>{screenText.titleText}</Text>
            <TextInput style={styles.input} value={title} onChangeText={setTitle} />
            <Text style={styles.label}>{screenText.contentText}</Text>
            <TextInput style={styles.input} value={content} onChangeText={setContent} />
            <Button title={screenText.btn} onPress={btnPress} />
        </View>
    );
}

const styles = StyleSheet.create({
    screenTitle: {
        fontSize: 35,
        alignSelf: 'center'
    },  
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        margin: 5,
        padding: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5,
    }
});

export default CreateBlogScreen;
