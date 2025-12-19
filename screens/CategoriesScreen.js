import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const CATEGORIES = [
  'All',
  'Breakfast',
  'Lunch',
  'Dinner',
  'Snack',
  'Dessert',
  'Beverage',
  'Veg',
  'Non-Veg',
  'Healthy',
];

export default function CategoriesScreen({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: '#fff' }}>

      <Text style={{ fontSize: 26, fontWeight: 'bold', marginBottom: 20 }}>
        📂 Categories
      </Text>

      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Home', { category: item })
            }
            style={{
              padding: 15,
              backgroundColor: '#ff7043',
              borderRadius: 10,
              marginBottom: 10
            }}
          >
            <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
