import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Home extends Component{
    static navigationOptions = {
        title: 'Bienvenido Marvel API'
    }
    render(){
        const { navigate } = this.props.navigation;
        return(
            <View style={styles.container}>
                <Text>Para ver los comics relacionados con Deadpool</Text>
                <Button 
                    title="Ver Comics"
                    onPress={() => this.props.navigation.navigate('ListComics')}
                />
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
    }
})