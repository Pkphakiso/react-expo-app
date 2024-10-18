// import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MaelDetailScreen';

const Stack = createNativeStackNavigator();

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

          <Stack.Screen name='MealCategories' component={CategoriesScreen}
          options={{
            title:"Maels Categories",
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
          <Stack.Screen name='MealDetail' component={MealDetailScreen} />
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
