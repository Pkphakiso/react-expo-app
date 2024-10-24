import {Ionicons} from "@expo/vector-icons";
import {createDrawerNavigator} from "@react-navigation/drawer"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
// import { StatusBar } from 'expo-status-bar';
import {  Button, StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import MealDetailScreen from './screens/MaelDetailScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavition(){
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle:{backgroundColor:"#383a32"},
      headerTintColor:"#d7dbdd",
      //note the sceneContainerin the drawer
      sceneContainerStyle:{backgroundColor:"#7f8176"},
      drawerContentStyle:{backgroundColor:"#626361"},
      drawerInactiveTintColor:"#fff",
      drawerActiveBackgroundColor:"#90948d",
      drawerActiveTintColor:"#383a31"
    }}>
      <Drawer.Screen name='Categories' component={CategoriesScreen} options={{
        title:"All Categoryies",
        drawerIcon: ({color,size})=> <Ionicons name='list' color={color} size={size}/>
      }} />
      <Drawer.Screen name='Favorites' component={FavoriteScreen} options={{
        drawerIcon: ({color, size}) => <Ionicons name="star" color={color} size={size} />
      }}/>
    </Drawer.Navigator>
  ) 
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
