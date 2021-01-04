import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import FoodSearchScreen from './src/projects/food-search/screens/FoodSearchScreen';
import HomeScreen from './src/screens/HomeScreen';

const navigator = createStackNavigator({
    Home: HomeScreen,
    // Basic Project:

    // Food Search Project:
    FoodSearch: FoodSearchScreen,
}, {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        title: 'RN Projects'
    }
});

export default createAppContainer(navigator);
