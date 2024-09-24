import { Pressable, Text, View, StyleSheet, Platform } from "react-native";

const CategoryGridTile = ({ title, color }) => {
  return (
    <View style={[styles.gridItem, {backgroundColor:color}]}>
      <Pressable android_ripple={{color:"#ccc"}} 
      style={({pressed})=>[
        styles.button, pressed ? styles.buttonPressed : null,
      ]}
      >
        <View style={styles.innerContainer}>
            <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({ 
  gridItem: {
    flex: 1,
    height: 150,
    margin: 16,
    
    borderRadius: 8,
    elevation: 4,
// ios style
    backgroundColor:"white",
    shadowOpacity:0.25,
    shadowColor:"black",
    shadowRadius:8,
    shadowOffset:{width:0, height:2},
    overflow: Platform.OS === "android" ? "hidden" : "visible"
  },
  button:{
    flex:1,
  },
  buttonPressed:{
    opacity:0.5,
  }
  ,
  innerContainer:{
    flex:1,
    padding:16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    fontWeight:"bold",
    fontSize:18,
  }
 })

export default CategoryGridTile;
