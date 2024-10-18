import { StyleSheet, Text, View } from "react-native";

const List = ({data}) => {
    return data.map((datapoint) => (
        <View key={datapoint} style={styles.listItem}>
            <Text style={styles.textItem}>{datapoint}</Text>
        </View>
        )
    );
}
export default List; 
const styles = StyleSheet.create({
    listItem:{
        borderRadius:6,
        paddingHorizontal:6,
        paddingVertical:4,
        marginVertical:4,
        marginHorizontal:20,
        backgroundColor:"#383a32"
    },
    textItem:{
        color:"#d7dbdd", 
        textAlign:"center"
    }
});