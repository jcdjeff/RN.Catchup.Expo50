import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

type DayListItem = {
    day: number;
};


export default function DayListItem({day}: DayListItem) {
return (
    <View style={styles.box}>
        <Text style={styles.text}>{ day }</Text>
    </View>
)
}


const styles = StyleSheet.create({
box: {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: '#F9EDE8',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: .8,
    borderColor: '#9b4521',
    borderRadius: 20, 
},
text: {
    color: '#9b4521',
    fontSize: 80,
    fontWeight: 'bold',
}
});

