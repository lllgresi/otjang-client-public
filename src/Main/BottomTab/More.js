
import * as React from 'react';

import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Modal, Portal, Button, Provider, Badge } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 60
    },
    button: {
        width: "60%",
        height: "15%",
        justifyContent: "center",
        margin: 20,
        borderRadius: 30
    },
    devInfo: {
        marginTop: 45
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    modal: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        borderRadius: 20,
        width: "70%",
        height: "55%",
        paddingVertical: 50,
        paddingHorizontal: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    badgeContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    badge: {
        margin: 5
    },
    badge1: {
        backgroundColor: "#abfcd6"
    },
    badge2: {
        backgroundColor: "#1c016d"
    },
    badge3: {
        backgroundColor: "#95d0f9"
    },
    badge4: {
        backgroundColor: "#d876e3"
    },
    badge5: {
        backgroundColor: "#7057ff"
    },
    textContainer: {
        marginTop: 20,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 20
    },
    content: {
        lineHeight: 25
    }
});

function More() {

    const navigation = useNavigation();

    function moveToStatistics() {

        moreNavigation.navigate('StatisticsContainer');
    };

    function moveToMyInfo() {
        moreNavigation.navigate('MyInfoContainer');
    };

    function moveToWashing() {
        moreNavigation.navigate('HowToWash');
        console.log('세탁 이동')
    };

    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    return (
        <Provider>
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
                    icon="washing-machine"
                    mode="contained"
                    onPress={moveToWashing}>
                    HOW TO WASH
                </Button>
                <Button
                    style={styles.devInfo}
                    icon="hanger"
                    onPress={showModal}>
                    DEV INFO
                </Button>
                <View>
                    <Portal style={styles.modalContainer}>
                        <Modal
                            visible={visible}
                            onDismiss={hideModal}
                            contentContainerStyle={styles.modal}>
                            <View style={styles.badgeContainer}>
                                <Badge
                                    style={[styles.badge1, styles.badge]}
                                    size={25}>React Native</Badge>
                                <Badge
                                    style={[styles.badge2, styles.badge]}
                                    size={25}>Redux</Badge>
                                <Badge
                                    style={[styles.badge3, styles.badge]}
                                    size={25}>Node.js</Badge>
                                <Badge
                                    style={[styles.badge4, styles.badge]}
                                    size={25}>Express</Badge>
                                <Badge
                                    style={[styles.badge5, styles.badge]}
                                    size={25}>MySQL</Badge>
                                <Badge
                                    style={[styles.badge6, styles.badge]}
                                    size={25}>Sequelize</Badge>
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.title}>github</Text>
                                <View style={styles.content}>
                                    <Text>@ goodlana </Text>
                                    <Text>@ gyeongwon1275 </Text>
                                    <Text>@ gyu716625 </Text>
                                    <Text>@ lllgresi </Text>
                                </View>
                            </View>
                        </Modal>
                    </Portal>
                </View>
            </View>
        </Provider>
    );
}

export default More;