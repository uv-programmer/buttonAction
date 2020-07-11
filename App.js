import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Button, Text, View, SafeAreaView } from 'react-native';

const Cat = (props) => {
  const [isHungry, setIsHungry] = useState(true);

  return(
    <SafeAreaView>
      <View>
  <Text>Hi I am {props.name} and I am {isHungry ? "hungry!":"full"}!</Text>
  <Button onPress = {() => {
    {setIsHungry(false) }
  }} 
  disabled = {!isHungry}
  title={isHungry ? "Feed me!!" : "Thank You"}
   color="blue"
   />
   </View>
  </SafeAreaView>
  );
}

const Cafe = () => {
  return(
    <>
<Cat name = 'Joseph'/>
<Cat name = 'Jane'/>
<Cat name = 'Bim'/>
</>
  );
}

export default Cafe
