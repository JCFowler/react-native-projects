import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const BlogPostHomeScreen = ({ navigation }) => {
    const {state, deleteBlogPost} = useContext(Context);

    return (
        <View>
            <FlatList
                keyExtractor={(blog) => `${blog.id}`}
                data={state}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => { navigation.navigate('ShowBlog', { id: item.id})}}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title} - {item.id}</Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Feather name='trash' style={styles.icon} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
}

BlogPostHomeScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('CreateBlog')}>
            <Feather name="plus" size={30} />
          </TouchableOpacity>
        ),
    };
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 20,
    },
    icon: {
        fontSize: 26,
    }
})

export default BlogPostHomeScreen;