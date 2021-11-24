import React, { useEffect } from 'react';
import {
    View,
    Animated,
    PanResponder
} from 'react-native';
const SwipeGesture = (props) => {
  const PR =  PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => true,
    onPanResponderRelease: (evt, gestureState) => {
        let x = gestureState.dx;
        let y = gestureState.dy;
        if (Math.abs(x) > Math.abs(y)) {
            if (x >= 0) {
                props.onSwipePerformed('right')
            }
            else {
                props.onSwipePerformed('left')
            }
        }
        else {
            if (y >= 0) {
                props.onSwipePerformed('down')
            }
            else {
                props.onSwipePerformed('up')
            }
        }
    }
})
    // useEffect(() => {
         
    //     return () => {
    //         // cleanup
    //     }
    // }, [])


    return (
        <Animated.View {...PR.panHandlers} style={props.gestureStyle}>
            <View>{props.children}</View>
        </Animated.View>
    )

}
export default SwipeGesture;
