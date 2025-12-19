import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { RECIPES } from '../data/recipes';

export default function HomeScreen({ navigation, route }) {

  const selectedCategory = route?.params?.category || 'All';

  const filteredRecipes =
    selectedCategory === 'All'
      ? RECIPES
      : RECIPES.filter(recipe =>
          recipe.categories.includes(selectedCategory)
        );

  return (
    <View style={{ flex: 1, padding: 15, backgroundColor: '#fff' }}>

      <Text style={{ fontSize: 26, fontWeight: 'bold', marginBottom: 10 }}>
        🍲 {selectedCategory} Recipes
      </Text>

      <FlatList
        data={filteredRecipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Detail', { recipe: item })}
            style={{ flexDirection: 'row', marginBottom: 12 }}
          >
            <Image
              source={{ uri: item.image }}
              style={{ width: 80, height: 80, borderRadius: 10, marginRight: 10 }}
            />
            <Text style={{ fontSize: 18 }}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
