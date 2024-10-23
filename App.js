import { StatusBar } from 'expo-status-bar';
// import { StatusBar } from 'expo-status-bar';
import {  Button, StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';

import {createDrawerNavigator} from "@react-navigation/drawer"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavoriteScreen from './screens/FavoriteScreen';
import MealDetailScreen from './screens/MaelDetailScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavition(){
  return  <Drawer.Navigator screenOptions={{
    headerStyle:{backgroundColor:"#383a32"},
      headerTintColor:"#d7dbdd",
      //note the sceneContainerin the drawer
      sceneContainerStyle:{backgroundColor:"#7f8176"},
    }}>
      <Drawer.Screen name='Categories' component={CategoriesScreen} options={{
        title:"All Categoryies"
      }} />
      <Drawer.Screen name='Favorites' component={FavoriteScreen} />
    </Drawer.Navigator>;
  }

export default function App() {

  return (
    <>
      <StatusBar style="light"/>

      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle:{backgroundColor:"#383a32"},
            headerTintColor:"#d7dbdd",
            contentStyle:{backgroundColor:"#7f8176"},
          }}
        >

          <Stack.Screen name='MealCategories' component={DrawerNavition}
          options={{
            // title:"Maels Categories",
            headerShown:false,
          }} />

          <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} 
          // dynamically set title
          // options={({route,navigation})=>{
          //   const catId = route.params.categoryId;
          //   return {
          //     title:catId,
          //   }
          //  }} 
          />
          
          
           
          <Stack.Screen name='MealDetail' component={MealDetailScreen} 
            /** Adding the button on the right header
             * 
             * */
            //options={{
             // headerRight: () => {
               // return <Button title="tap me" />
             // }
            //}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
