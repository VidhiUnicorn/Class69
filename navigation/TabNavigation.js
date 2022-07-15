import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Search from "../screens/Search";
import Transaction from "../screens/Transaction";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator()

export default class TabNavigation extends React.Component{
    render (){
        return (
           <Tab.Navigator>
               <Tab.Screen name = "Transaction" component={Transaction} />
               <Tab.Screen name = "Search" component = {Search} />

           </Tab.Navigator>
        )
        
    }
}

