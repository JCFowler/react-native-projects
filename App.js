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

}, {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        title: 'RN Projects'
    }
});

export default createAppContainer(navigator);
