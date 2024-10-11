import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native";

const MealItem = ({title, imageUrl, duration, complexity, affordability}) => {
    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{color:"#ccc"}} 
            style={({pressed}) => (pressed ? styles.buttonPressed: null)}>
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{uri:imageUrl}} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.detailItem}>{duration} m</Text>
                        <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
                        <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </Pressable>
            
        </View>
    )
}

export default MealItem;
const styles =StyleSheet.create({
    mealItem:{
        margin:16,
        borderRadius:8,
        overflow:"hidden",
        backgroundColor:"white",
        elevation:4,
        // ios style
   
        shadowOpacity:0.25,
        shadowColor:"black",
        shadowRadius:8,
        shadowOffset:{width:0, height:2},
        overflow: Platform.OS === "android" ? "hidden" : "visible"
    },
    innerContainer:{borderRadius:16},
    buttonPressed:{
        opacity:0.5,
      },
    image:{
        height:200,
        width:"100%",
    },
    title:{
        fontSize:18,
        textAlign:"center",
        fontWeight:"bold"
    },
    details:{
        flexDirection:"row",
        alignItems:"center",
        padding:8,
        justifyContent:"center"
    },
    detailItem:{
        marginHorizontal:4,
        fontSize:12
    }
})