import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';

export default class ListComics extends Component {
	constructor(props){
        super(props)
        this.state = {
            loading: false,
            comics: [],
            url: 'https://gateway.marvel.com/v1/public/comics?ts=9&apikey=c36ebb71e85e0545db0da33f6374920c&hash=a89db08e3804326bd41596df65ac3918'
        }
	}

	componentDidMount(){
		this.getComics()
	}

	getComics = () => {
		this.setState({ loading:true })
		fetch(this.state.url)
		.then(res => res.json())
		.then(res => {
			this.setState({
			comics: res.results,
			loading: false
			})
		})
		.catch(err => console.log(err))
	};

	static navigationOptions = {
        title: 'MARVEL API',
        headerStyle: { backgroundColor: '#fff'},
        headerTitle: (
            <Image style={{ width: 85, height: 39, marginLeft: 80}} source={require('../../../assets/marvel-logo.png')} />
        )
	}
	
	render() {
		if(this.state.loading){
			return (
				<View style={styles.container}>
					<Text style={styles.textStyle}>Cargando comics...</Text>
					<MaterialIcons name="data-usage" size={25} color="white" />
				</View>
			);
		}

		return(
			<View style={styles.listComics}>
				<FlatList 
					data={this.state.comics}
					renderItem = {
						({item}) => <View>
							<Text>{ item.title }</Text>
							<Button 
								title="Ver detalle"
								onPress={()=> this.props.navigation.navigate('DetailComic')}
							/>
						</View>
					}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
		backgroundColor: '#DA1313',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listComics: {
        flex: 1,
        paddingTop: 50,
        paddingLeft: 5
	},
	textStyle: {
		color: '#fff',
		fontSize: 18
	}
});
