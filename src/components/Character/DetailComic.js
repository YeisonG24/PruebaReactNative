import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, ScrollView } from 'react-native';

export default class DetailComic extends Component{
    constructor(props){
        super(props)
        this.specificProps = this.props.navigation.state.params.passProps.item;
        this.modified = this.specificProps.modified.slice(0, 10)
    }

    static navigationOptions = {
        title: 'MARVEL API',
        headerStyle: { backgroundColor: '#fff'},
        headerTitle: (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image style={{ width: 85, height: 39, marginLeft: 80}} source={require('../../../assets/marvel-logo.png')} />
            </View>
        )
	}

    render(){
        return(
            <View style={styles.container}>
                <Image source={{uri: this.specificProps.thumbnail.path+'/landscape_incredible'+'.jpg'}} style={styles.image} />
                <ScrollView style={styles.subcontainer}>
                    <Text style={styles.title}>{this.specificProps.title}</Text>
                    <Text style={styles.title}>SERIE: </Text>
                    <Text style={styles.textStyle}>{this.specificProps.series.name}</Text>
                    <Text style={styles.title}>DESCRIPCIÓN: </Text>
                    <Text style={styles.textStyle}>{this.specificProps.description}</Text>
                    <Text style={styles.title}>ACTUALIZACIÓN: </Text>
                    <Text style={styles.textStyle}>{this.modified}</Text>
                    <Text style={styles.title}>PAGÍNAS: </Text>
                    <Text style={styles.textStyle}>{this.specificProps.pageCount}</Text>
                    <Text style={styles.padding}/>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
		backgroundColor: '#000',
        alignSelf: 'stretch'
    },
    subcontainer: {
        flex: 1,
		backgroundColor: '#fff',
        alignSelf: 'stretch',
        paddingLeft: 15,
        paddingRight: 15
    },
    title: {
        color: '#000',
		fontSize: 20,
		textAlign: 'left',
		fontWeight: 'bold',
        marginTop: 10,
        letterSpacing: 2
    },
    textStyle: {
        fontSize: 15,
        color: '#000',
        textAlign: 'justify',
        marginTop: 4,
        letterSpacing: 1
    },
    image: {
        height: 200,
        justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
        marginBottom: 10
    },
    padding: {
        color: '#000',
		fontSize: 20,
		textAlign: 'left',
		fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 15
    }
})