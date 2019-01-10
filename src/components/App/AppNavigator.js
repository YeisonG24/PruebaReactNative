import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './Home';

const RootStack = createStackNavigator({
    Home: { screen: Home }
})

const AppNavigator = createAppContainer(RootStack)

export default AppNavigator;