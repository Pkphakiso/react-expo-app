import { FlatList, StyleSheet, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";



const CategoriesScreen = ({navigation}) => {

  function renderCategorieItem({ item }) {
    
    function pressHandler(){
      navigation.navigate("MealsOverview",{
        categoryId:item.id,
      });//second parem as obj{}
    }
    return <CategoryGridTile title={item.title} color={item.color} onPress={pressHandler}/>;

    //return <CategoryGridTile title={item.title} color={item.color} /> ;

  }

  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategorieItem}
        numColumns={2}
        />
    </View>
  );
};
// numColumns={2}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CategoriesScreen;
