import {useEffect, useLayoutEffect} from "react"
import { FlatList, StyleSheet, Text, View } from "react-native";
import { MEALS ,CATEGORIES} from "../data/dummy-data";
import MealItem from "../components/MealItem";

const MealsOverviewScreen = ({ route, navigation})=>{

    const catId = route.params.categoryId
    const displayedMeals= MEALS.filter((mealItem)=>{
        return mealItem.categoryIds.indexOf(catId) >= 0;
    })

    //this set the title dynamically on the header
    useLayoutEffect(() =>{ 
        const categotyTitle = CATEGORIES.find((category)=> category.id === catId).title;

        navigation.setOptions({
            title: categotyTitle
        });
    } ,[catId, navigation])
    
    function renderMealItem(itemData){
        const item = itemData.item;
        const mealItemProps={
            id:item.id,
            title:item.title,
            imageUrl:item.imageUrl,
            duration:item.duration,
            complexity:item.complexity,
            affordability:item.affordability,
        }
        return (
            <MealItem  {...mealItemProps} />
        )

    }
    return (
        <View style={styles.container}>
            <Text> Meals Overview screen</Text>
            <Text>{catId}</Text>
            <FlatList 
            data={displayedMeals}
            keyextractor={(item)=> item.id}
            renderItem={renderMealItem}/>
        </View>
    )
}

export default MealsOverviewScreen;
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16,
    },

})