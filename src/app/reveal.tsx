import { router } from 'expo-router';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default function RevealScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Here is Your Fortune</Text>

      <Image
        source={{ uri: 'https://images.pixels.com/images/artworkimages/mediumlarge/1/fortune-teller-steve-hartwell.jpg' }}
        style={styles.image}
      />

      <View style={styles.fortuneBox}>
        <Text style={styles.fortuneText}>
          "You will solve a bug today by randomly deleting a single line of code that you didn't even write."
        </Text>
      </View>

      <Button
        title="Go Back"
        color="#06f0f6"
        onPress={() => router.back()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: '#e6f7fa',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#003355',
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 150,
    marginBottom: 40,
    marginTop: 10,
  },
  fortuneBox: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#0052cc',
    marginBottom: 30,
  },
  fortuneText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#003344',
    fontStyle: 'italic',
  },
});