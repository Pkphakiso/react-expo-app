import { View, Text, StyleSheet } from "react-native";

const Subtitle = ({children})=>{
    return (
        <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>{children}</Text>
        </View>
    )
}
export default Subtitle; 

const styles = StyleSheet.create({
    subTitleContainer:{
        borderBottomColor:"#ece7c8",
        borderBottomWidth:2,
        padding:6,
        marginHorizontal:20
    },
    subTitle:{
        fontSize:18,
        textAlign:"center",
        fontWeight:"bold",
        color:"#ece7c8"
        
    },
});