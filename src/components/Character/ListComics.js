import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ListView, TouchableHighlight } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import DetailComic from './DetailComic';

const REQUEST_URL = "https://gateway.marvel.com:443/v1/public/characters/1009268/comics";

export default class ListComics extends Component {
	
	constructor(props){
		super(props)
		this.timestamp = 5;
		this.public_key = '253e35bd5ff18eb2600b48db35da5cd6';
		this.hash = '8fee616eeedb7b355f5f9086c3b9b978';
		this.state = {
			dataSource: new ListView.DataSource({
				rowHasChanged: (row1, row2) => row1 !== row2
			}),
			loaded: false
		}
	}

	componentDidMount(){
		this.fetchData()
	}

	fetchData(){
		fetch(REQUEST_URL+'?ts='+this.timestamp+'&apikey='+this.public_key+'&hash='+this.hash)
		.then(res => res.json())
		.then(resData => {
			this.setState({
				dataSource: this.state.dataSource.cloneWithRows(resData.data.results),
				loaded: true
			})
		})
	}

	static navigationOptions = {
        title: 'MARVEL API',
        headerStyle: { backgroundColor: '#fff'},
        headerTitle: (
            <Image style={{ width: 85, height: 39, marginLeft: 80}} source={require('../../../assets/marvel-logo.png')} />
        )
	}

	renderLoading(){
		return(
			<View style={styles.container}>
				<Text style={styles.textStyle}>Cargando comics...</Text>
				<MaterialIcons name="data-usage" size={25} color="white" />
			</View>
		)
	}

	renderComic(comic){
		return(
			<TouchableHighlight onPress={() => this.onComic(comic)}>
				<ImageBackground source={{uri: comic.thumbnail.path+'/detail'+'.jpg'}} style={styles.backgroundImage}>
					<View style={styles.rightContainer}>
						<Text style={styles.title}>{comic.title}</Text>
					</View>
				</ImageBackground>
			</TouchableHighlight>
		)
	}

	render() {
		if(!this.state.loaded){
			return this.renderLoading();
		}
		return(
			<ListView 
				dataSource = {this.state.dataSource}
				renderRow = {this.renderComic.bind(this)}
				style={styles.listView}
			/>
		)
	}

	onComic(comic){
		this.props.navigation.push('DetailComic', {
			passProps: {comic:comic}
		})
	}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
		backgroundColor: '#DA1313',
        alignSelf: 'stretch',
		justifyContent: 'center',
		alignItems: 'center'
	},
	title: {
		color: '#fff',
		margin: 30,
		fontSize: 20,
		justifyContent: 'center',
		textAlign: 'center',
		fontWeight: 'bold',
		fontStyle: 'italic'
	},
    listComics: {
        flex: 1,
        paddingTop: 50,
        paddingLeft: 5
	},
	textStyle: {
		color: '#fff',
		fontSize: 18,
		textAlign: 'center'
	},
	backgroundImage: {
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
		height: 150
	},
	rightContainer: {
		backgroundColor: 'rgba(52,52,52,0.5)',
		alignSelf: 'stretch',
		paddingTop: 30,
		height: 150
	},
	ListView: {
		paddingTop: 64,
		marginBottom: 49
	}
});
