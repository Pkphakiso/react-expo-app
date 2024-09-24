import { FlatList, StyleSheet, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/categoriyGridTile";

function renderCategorieItem({ item }) {
  return <CategoryGridTile title={item.title} color={item.color} />;
}

const CategoriesScreen = () => {
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategorieItem}
        
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
