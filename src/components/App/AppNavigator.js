import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './Home';
import ListComics from '../Character/ListComics';
import DetailComic from '../Character/DetailComic';

const RootStack = createStackNavigator({
    Home: { screen: Home },
    ListComics: { screen: ListComics },
    DetailComic: { screen: DetailComic }
})

const AppNavigator = createAppContainer(RootStack)

export default AppNavigator;