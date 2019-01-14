import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, FlatList, TouchableHighlight } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Pagination from 'react-native-pagination';

const REQUEST_URL = "https://gateway.marvel.com:443/v1/public/characters/1009268/comics";

export default class ListComics extends Component {
	
	constructor(props){
		super(props)
		this.timestamp = 5;
		this.public_key = '253e35bd5ff18eb2600b48db35da5cd6';
		this.hash = '8fee616eeedb7b355f5f9086c3b9b978';
		this.state = {
			comics: [],
			isLoading: false
		}
		this.handleViewableItemsChanged = this.handleViewableItemsChanged.bind(this)
	}

	componentDidMount(){
		this.fetchData()
	}

	handleViewableItemsChanged(info){
		console.log(info)
	}

	fetchData = () => {
		this.setState({isLoading: true})

		fetch(REQUEST_URL+'?limit=30&ts='+this.timestamp+'&apikey='+this.public_key+'&hash='+this.hash)
		.then(res => res.json())
		.then(res => {
			this.setState({
				comics: res.data.results,
				isLoading: false
			})
		})
	}

	static navigationOptions = {
        title: 'MARVEL API',
        headerStyle: { backgroundColor: '#fff' },
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
		);
	}

	renderListComics(item){
		return(
			<TouchableHighlight onPress={() => this.onComic(item)}>
				<ImageBackground source={{uri: item.thumbnail.path+'/detail'+'.jpg'}} style={styles.backgroundImage}>
					<View style={styles.rightContainer}>
						<Text style={styles.title}>{item.title}</Text>
					</View>
				</ImageBackground>
			</TouchableHighlight>
		);
	}

	render() {
		if(this.state.isLoading){
			return this.renderLoading();
		}
		return(
			<View>
				<FlatList 
					data={this.state.comics}
					initialNumToRender={10}
					renderItem={
						({item}) =>
						this.renderListComics(item)
					}
					ref={r=>this.refs=r}
					keyExtractor={(item, index) => index.toString()}
					onViewableItemsChanged={this.handleViewableItemsChanged}
					onEndReachedThreshold={0.5}
				/>
				<Pagination 
					listRef={this.refs}
					paginationVisibleItems={this.state.viewableItems}
					paginationItems={this.state.items}
					paginationItemPadSize={10}
				/>
			</View>
		)
	}

	onComic(item){
		this.props.navigation.push('DetailComic', {
			passProps: {item:item}
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
