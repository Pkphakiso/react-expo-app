import {useLayoutEffect} from "react";
import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import IconButton from "../components/IconButton";
import MealDetail from "../components/MealDetail";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = ({route, navigation})=>{
    /**
     * the route prop gives us the params which were set for this screen
     */
    const mealId= route.params.mealId;
    const selectedMeal = MEALS.find((meal)=>meal.id=== mealId);

    /**
     * adding Button on screen 
     */
    function headeruttonPressHandler(){
        return console.log("pressed");
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon="star" color="white" onPress={headeruttonPressHandler} />;
            }
        });
    },[navigation,headeruttonPressHandler]);

    return (
        <ScrollView style={styles.rootContainer}>
            <Image source={{uri:selectedMeal.imageUrl}} style={styles.image}/>
            <Text style={styles.title}>{selectedMeal.title}</Text>
            
            <MealDetail 
                duration={selectedMeal.duration} 
                complexity={selectedMeal.complexity} 
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients}/>
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
            
        </ScrollView>
    )
}
export default MealDetailScreen;
const styles = StyleSheet.create({
    rootContainer:{
        marginBottom:20
    },
    image:{
        height:300,
        width:"100%",
    },
    title:{
        fontSize:20,
        margin:8,
        textAlign:"center",
        fontWeight:"bold",
        color:"white"
    },
    // subTitleContainer:{
    //     borderBottomColor:"#ece7c8",

    //     borderBottomWidth:2,
    //     padding:6,
    //     marginHorizontal:20
    // },
    // subTitle:{
    //     fontSize:18,
    //     textAlign:"center",
    //     fontWeight:"bold",
    //     color:"#ece7c8"
        
    // },
    detailText:{
        color:"white",
    },
    listOuterContainer:{
        alignItems:"center",
    },
    listContainer:{
        width:"80%",
    }

})