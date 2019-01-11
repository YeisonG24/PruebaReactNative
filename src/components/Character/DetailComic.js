import React, { Component } from 'react';
import { Modal, Text, TouchableHighligh, View, Alert } from 'react-native';

export default class DetailComic extends Component{
    state = {
        modalVisible: false
    }

    setModalVisible(visible){
        this.setState({modalVisible: visible})
    }

    render(){
        return(
            <View>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={()=> {
                        Alert.alert('El detalle se a cerrado');
                    }}
                >
                <View style={{marginTop: 22}}>
                    <View>
                        <Text>Hello World!</Text>
                        <TouchableHighligh 
                            onPress={() => {
                                this.setModalVisible(!this.state.modalVisible)
                            }}>
                            <Text>Hide Modal</Text>
                        </TouchableHighligh>
                    </View>
                </View>
                </Modal>
                
                <TouchableHighligh
                    onPress={()=>{
                        this.setModalVisible(true)
                    }}>
                    <Text>Show Modal</Text>
                </TouchableHighligh>
            </View>
        );
    }
}