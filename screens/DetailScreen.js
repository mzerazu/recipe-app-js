import { View, Text, Image, ScrollView } from 'react-native';

export default function DetailScreen({ route }) {

  if (!route?.params?.recipe) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>No recipe data found</Text>
      </View>
    );
  }

  const { recipe } = route.params;

  return (
    <ScrollView style={{ flex: 1, padding: 20, backgroundColor: '#fff' }}>

      <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 10 }}>
        {recipe.title}
      </Text>

      <Image
        source={{ uri: recipe.image }}
        style={{ width: '100%', height: 200, borderRadius: 10, marginBottom: 15 }}
      />

      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Ingredients:</Text>
      {recipe.ingredients.map((ing, i) => (
        <Text key={i}>• {ing}</Text>
      ))}

      <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>
        Steps:
      </Text>
      {recipe.steps.map((step, i) => (
        <Text key={i}>{i + 1}. {step}</Text>
      ))}

    </ScrollView>
  );
}
