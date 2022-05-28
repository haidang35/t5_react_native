import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  View,
  TextInput,
  Image,
  ImageBackground,
  FlatList,
  SafeAreaView,
} from 'react-native';

const data = [
  {
    id: 1,
    title: 'hello 1',
  },
  {
    id: 2,
    title: 'hello 2 ',
  },
  {
    id: 3,
    title: 'hello 3',
  },
  {
    id: 4,
    title: 'hello 3',
  },
  {
    id: 5,
    title: 'hello 3',
  },
];

const Hello = ({ navigation }) => {
  const [title, setTitle] = useState('Hello Screen');

  const handleTitle = () => {
    setTitle('Alo');
  };

  const handleText = newText => {
    setTitle(newText);
  };

  const handleNavigation = () => {
      navigation.navigate('HomeScreen');
  }
  return (
    <>
      <ImageBackground
        source={{uri: 'https://www.w3schools.com/w3css/img_lights.jpg'}}
        style={styles.backgroundContainer}>
        <ScrollView style={styles.container}>
          <Text style={styles.text}>{title}</Text>
          <Button title="Click me" color="red" onPress={handleTitle} />
          <TouchableOpacity onPress={handleNavigation} style={styles.button}>
            <Text style={styles.buttonText}>Home</Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    color: 'red',
    fontStyle: 'italic',
    fontWeight: '800',
  },
  container: {
    padding: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    marginTop: 10,
    borderRadius: 30,
  },
  buttonText: {
    color: '#ffff',
    fontSize: 18,
    textAlign: 'center',
  },
  textInput: {
    marginTop: 10,
    width: '100%',
    backgroundColor: '#ffff',
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  image: {
    width: 250,
    height: 250,
    marginHorizontal: 50,
    marginVertical: 20,
  },
  backgroundContainer: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default Hello;
