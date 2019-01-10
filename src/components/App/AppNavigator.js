import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './Home';
import ListComics from '../Character/ListComics';

const RootStack = createStackNavigator({
    Home: { screen: Home },
    ListComics: { screen: ListComics }
})

const AppNavigator = createAppContainer(RootStack)

export default AppNavigator;