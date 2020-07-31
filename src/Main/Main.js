import React from 'react';
import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import Accessories from './BottomTab/Accessories';
import AllClothesContainer from './BottomTab/AllClothesContainer';
import ClothingContainer from './BottomTab/ClothingContainer';
import ShoeContainer from './BottomTab/ShoeContainer';
import BagAccContainer from './BottomTab/BagAccContainer';
import More from './BottomTab/More';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AddButton from '../UIcomponents/AddButton'
import { Map, List, is } from 'immutable';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation, useRoute } from '@react-navigation/native';
import kmpFinder from 'kmp-matcher';
const Tab = createMaterialBottomTabNavigator();
// shoe-formal


const emptyClothing = Map({
    item_id: null,
    image: null,
    type: Map({ typeValue: null, top: false, bottom: false, dress: false }),
    category: Map({ categoryValue: null, clothing: false, Shoes: false, Accessories: false }),
    buydate: null,
    price: null,
    brand: null,
    storage: null,
    season: Map({
        seasonArray: List([null, null, null, null]),
        spring: false, summer: false, fall: false, winter: false
    })
})

function Main({ navigation, ClothesActions }) {


    /* 
        TODO>
        
        서버에서 전체 의류 데이터를 받으면 
        CLOTHING, SHOES, ACC 로 분류한다. 

    */
    /* 

    TODO 

    MORE 에서는 플러스 버튼 지우기 

    TAB BAR 가 more 에 focused 되어있을 때만 지운다. 

    or more 을 tab press 했을 때만 지운다. 

    navigation
    */



    const route = useRoute();
    // var history = mainRoute.state.history;
    // THINK 맨 처음에는 STATE 가 없음 
    const routeKeys = Object.keys(route);
    const isInStateInRoute = routeKeys.find((key) => { return key === 'state' });
    var history;
    var currentLocation;
    var isInMore = false;
    if (isInStateInRoute) {
        history = route.state.history;
        currentLocation = history[history.length - 1].key;
        let moreFindResult = kmpFinder.kmp(currentLocation, 'More');
        if (moreFindResult.length > 0) {
            isInMore = true;
        }
    }

    //  서버 get 

    /*  React.useEffect(() => {
         async function getClothes() {
             let token = await AsyncStorage.getItem('TOKEN');
             token = JSON.parse(token);
             ClothesActions.getClothesFromServer(token);
         }
         getClothes();
     }, []); */


    function moveToAddItems() {
        ClothesActions.setTemporaryClothing(emptyClothing);
        navigation.navigate('AddItemsContainer')
    }


    return (

        <>
            <Tab.Navigator
                initialRouteName="AllClothes"
                activeColor="white"
            >
                <Tab.Screen name="AllClothes" component={AllClothesContainer}
                    options={{
                        tabBarLabel: 'AllClothes',
                        // Tab.Navigator 에서 설정한 color 를 상속받기 위함 
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="home" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen name="Clothing" component={ClothingContainer}
                    options={{
                        tabBarLabel: 'Clothing',
                        tabBarIcon: ({ color }) => (
                            <FontAwesome5Icons name="tshirt" color={color} size={20} />
                        ),
                    }}
                />
                <Tab.Screen name="Shoe" component={ShoeContainer}
                    options={{
                        tabBarLabel: 'Shoe',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="shoe-formal" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen name="Accessories" component={BagAccContainer}
                    options={{
                        tabBarLabel: 'Accessories',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="hat-fedora" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen name="More" component={More}
                    options={{
                        tabBarLabel: 'More',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="dots-horizontal" color={color} size={26} />
                        ),
                    }}

                />
            </Tab.Navigator>
            {isInMore ? <></> : <AddButton onPress={moveToAddItems} />}
        </>
    );
}

export default Main;