import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://res.cloudinary.com/thrillophilia/image/upload/c_fill,dpr_1.5,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/je2f8uq60c2rchudd1c6goxrb5is_shutterstock_428654155.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={[styles.cardBody]}>
          <Text style={styles.cardTitle}>Humayuns Tomb</Text>
          <Text style={styles.cardLabel}>New Delhi, India</Text>
          <Text style={styles.cardDescription}>
            Popularly known as Maqbara-e-Humayun, Humayun's tomb is nothing but
            an architectural masterpiece that is worth exploring if you are in
            Delhi. Declared as a UNESCO world heritage site in 1993, this
            monument is the first garden tomb to be built in India.
          </Text>
          <Text style={styles.cardFooter}>1 Eternity away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 16,
    marginTop: 8,
  },
  card: {margin: 16, borderRadius: 8, overflow: 'hidden'},
  cardElevated: {
    backgroundColor: '#CAD5E2',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    objectFit: 'cover',
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    padding: 8,
  },
  cardTitle: {
    fontSize: 20,
    textAlign: 'center',
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardLabel: {
    color: '#000',
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 12,
    flexShrink: 1,
    marginTop: 6,
  },
  cardFooter: {
    color: '#333',
    textAlign: 'center',
    marginBottom:8
  },
});
