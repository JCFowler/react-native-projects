import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import BasicHomeScreen from './src/projects/basic/screens/BasicHomeScreen';
import FoodSearchScreen from './src/projects/food-search/screens/FoodSearchScreen';
import RestaurantDetailScreen from './src/projects/food-search/screens/RestaurantDetailScreen';
import BoxScreen from './src/projects/basic/screens/BoxScreen';
import ColorsScreen from './src/projects/basic/screens/ColorsScreen';
import CounterScreen from './src/projects/basic/screens/CounterScreen';
import FlexScreen from './src/projects/basic/screens/FlexScreen';
import ImageScreen from './src/projects/basic/screens/ImageScreen';
import NameScreen from './src/projects/basic/screens/NameScreen';
import SingleColor from './src/projects/basic/screens/SingleColorScreen';
import HomeScreen from './src/screens/HomeScreen';
import BlogPostHomeScreen from './src/projects/blog-post/screens/BlogPostHomeScreen';
import { Provider } from './src/projects/blog-post/context/BlogContext';
import ShowBlogScreen from './src/projects/blog-post/screens/ShowBlogScreen';
import CreateBlogScreen from './src/projects/blog-post/screens/CreateBlogScreen';

const navigator = createStackNavigator({
    Home: HomeScreen,

    // Basic Project:
    BasicHome: BasicHomeScreen,
    List: ImageScreen,
    Colors: ColorsScreen,
    Single: SingleColor,
    Counter: CounterScreen,
    Name: NameScreen,
    Box: BoxScreen,
    Flex: FlexScreen,

    // Food Search Project:
    FoodSearch: FoodSearchScreen,
    RestaurantDetail: RestaurantDetailScreen,

    // Blog Post Project:
    BlogPostHome: BlogPostHomeScreen,
    ShowBlog: ShowBlogScreen,
    CreateBlog: CreateBlogScreen,
}, {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        title: 'RN Projects'
    }
});

const App = createAppContainer(navigator);

export default () => {
    return (
        <Provider>
            <App />
        </Provider>
    );
}   
