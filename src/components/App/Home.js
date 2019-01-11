import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default class Home extends Component{
    static navigationOptions = {
        title: 'MARVEL API',
        headerStyle: { backgroundColor: '#000' },
        headerTitle: (
            <Image style={{ width: 85, height: 39, marginLeft: 135}} source={require('../../../assets/marvel-logo.png')} />
        )
    }
    render(){
        const { navigate } = this.props.navigation;
        return(
            <View style={styles.container}>
                <Image source={require('../../../assets/fondo.jpg')} style={styles.styleImage}/>
                <View style={styles.styleContent}> 
                    <Text style={styles.styleText}>Comics relacionados con Deadpool</Text>
                    <Button
                        color="#FF4444"
                        title="Ver Comics"
                        onPress={() => this.props.navigation.navigate('ListComics')}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    styleContent: {
        backgroundColor: 'rgba(15, 15, 15, 0.8)',
        width: 300,
        padding: 30,
        position: 'absolute'
    },  
    styleText: {
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 15,
        color: '#fff'
    },
    styleImage: {
        width: 400,
        height: 600
    }
})