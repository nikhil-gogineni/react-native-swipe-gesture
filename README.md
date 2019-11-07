# react-native-swipe-gesture

React Native component for handling swipe gestures in up, down, left and right direction.

# Why react-native-swipe-gesture?

This component is purely written in jsx. No dom manupulations involved, no third party modules added and no native modules attached hence no problems with dependencies. Just download the file, copy and paste in your project and you are good go to. Cheers :)

# Usage

Step -1) Download the file and copy it into your project.

step -2) Import the file into the component you wanted to use.

 
Props for SwipeGesture
1) gestureStyle : Send the style of the View of the SwipeGesture component.
2) onSwipePerformed : send the action that should be triggered when swipe is performed.

# Example:
```
import React, { Component } from 'react';

import {
  Text,
  View, 
  StyleSheet
} from 'react-native';

import SwipeGesture from './swipe-gesture'

export default class App extends Component {

  onSwipePerformed = (action) => {
    /// action : 'left' for left swipe
    /// action : 'right' for right swipe
    /// action : 'up' for up swipe
    /// action : 'down' for down swipe
    
    switch(action){
      case 'left':{
        console.log('left Swipe performed');
        break;
      }
       case 'right':{
        console.log('right Swipe performed');
        break;
      }
       case 'up':{
        console.log('up Swipe performed');
        break;
      }
       case 'down':{
        console.log('down Swipe performed');
        break;
      }
       default : {
       console.log('Undeteceted action');
       }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <SwipeGesture gestureStyle={styles.swipesGestureContainer} 
            onSwipePerformed={this.onSwipePerformed}>
          <Text>This is react native swipe gesture</Text>
          <Text>Used to detect the user swipes and function accordingly</Text>
        </SwipeGesture>
      </View>
    );
  }
}

const styles= StyleSheet.create({
 container:{
  height:'100%',
  widht:'100%'
 },
 swipesGestureContainer:{
  height:'100%',
  width:'100%'
 },
})

```

# NOTE 
```diff
!Avoid using ScollView inside the SwipeGesture Component. 
!Have the ScrollView outside the SwipeGesture Component.
```



