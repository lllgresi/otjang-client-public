import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: "65%",
        height: "20%",
        justifyContent: "center",
        margin: 20,
        borderRadius: 30
    }
})

function More() {

    const navigation = useNavigation();

    function moveToStatistics() {
        navigation.navigate('StatisticsContainer');
    }

    function moveToMyInfo() {
        navigation.navigate('MyInfoContainer');
    }

    function moveToWashing() {
        navigation.navigate('HowToWash'); //정적인 데이터만 담을거라서 container가 필요하진 않은데... 음... 이건 좀 물어봐야 할 것 같아..!
    }

    return (
        <View style={styles.container}>
            <Button
                style={styles.button}
                icon="account"
                mode="contained"
                onPress={moveToMyInfo}>
                MY INFO
                </Button>
            <Button
                style={styles.button}
                icon="graph"
                mode="contained"
                onPress={moveToStatistics}>
                STATISTICS
                </Button>
            <Button
                style={styles.button}
                icon="washing-machine" // 이거 어떻게 가져오는거지..? : 'react-native-paper'
                mode="contained"
                onPress={moveToWashing}>
                HOW TO WASH
                </Button>

        </View>
    );
}

export default More;