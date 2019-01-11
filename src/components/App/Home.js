import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

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
                    <Text style={styles.styleText}>Comics relacionados con:</Text>
                    <Text style={styles.bold}>DEADPOOL</Text>
                    <Button
                        color="#FF4444"
                        title="Ver Comics"
                        onPress={() => this.props.navigation.navigate('ListComics')}
                    />
                </View>
                <View style={styles.styleFooter}>
                    <View>
                        <Text style={styles.colorText}>Todos los derechos reservados </Text>
                        <Text style={styles.footer}>©2019 Imaginamos</Text>
                    </View>
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
        color: '#fff',
        marginBottom: 8
    },
    styleImage: {
        width: 400,
        height: 600
    },
    styleFooter: {
        flex: 1,
        position: 'absolute',
        left: 0, 
        right: 0, 
        bottom: 0,
        padding: 10,
        backgroundColor: '#000',
        alignItems: 'center',
        textAlign: 'center'
    },
    footer: {
        textAlign: 'center',
        color: '#fff'
    },
    colorText: {
        color: '#fff'
    },
    bold: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#fff',
        textAlign: 'center',
        fontStyle: 'italic',
        marginBottom: 15
    }
})