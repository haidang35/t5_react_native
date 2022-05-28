import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Flex = () => {
  return (
    <View style={styles.container}>
        <View style={[styles.item, {backgroundColor: 'red'}]}></View>
        <View style={[styles.item, {backgroundColor: 'blue'}]}></View>
        <View style={[styles.item, {backgroundColor: 'green'}]}></View>
        <View style={[styles.item, {backgroundColor: 'purple'}]}></View> 
    </View>
  )
}

export default Flex

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'baseline'
    },
    item: {
        marginVertical: 20,
        width: "20%",
        height: 50,
    }
})