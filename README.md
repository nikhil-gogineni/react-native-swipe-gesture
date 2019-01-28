# react-native-swipe-gesture

React Native component for handling swipe gestures in up, down, left and right direction.

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
        console.log('left Swipe performed')
      }
       case 'right':{
        console.log('right Swipe performed')
      }
       case 'up':{
        console.log('up Swipe performed')
      }
       case 'down':{
        console.log('down Swipe performed')
      }
       default : {
       console.log('Undeteceted action')
       }
    }
  }

  render() {
    return (
      <View style={{ height: '100%', width: '100%' }}>
        <SwipeGesture gestureStyle={{ height: '100%', width: '100%', backgroundColor: 'yellow' }} 
            onSwipePerformed={this.onSwipePerformed}>
          <Text>This is swipe gesture</Text>
          <Text>Used to detect the user swipes and function accordingly</Text>
        </SwipeGesture>
      </View>
    );
  }
}

```

# NOTE 
Avoid using ScollView inside the SwipeGesture Component. Have the ScrollView outside the SwipeGesture Component.
