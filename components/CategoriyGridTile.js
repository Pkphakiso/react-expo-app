import { Pressable, Text, View, StyleSheet } from "react-native";

const CategoryGridTile = ({ title, color }) => {
  return (
    <View styles={styles.gridItem}>
      <Pressable>
        <View>
            <Text>{title}</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    elevation: 4,
  }
 })

export default CategoryGridTile;
