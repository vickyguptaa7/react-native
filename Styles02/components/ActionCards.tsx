import React from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ActionCards() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Action Cards</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>What's your favorite website?</Text>
        </View>
        <Image
          source={{
            uri: 'https://media.licdn.com/dms/image/D4D03AQHnG_pHCx1WJQ/profile-displayphoto-shrink_400_400/0/1685173322306?e=1694649600&v=beta&t=4Gc9ceTKuhdA3OkiMMxMLFTL8obceW0SPAtQO_CmCEE',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, odit! Tenetur quae libero soluta, autem, minus
            necessitatibus quod cupiditate ab odit animi labore, quidem possimus
            sunt quisquam laboriosam accusantium ipsam reprehenderit alias!
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => openWebsite('https://www.youtube.com/')}>
            <Text style={styles.socialLinks}>Visit Website</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openWebsite('https://www.linkedin.com/in/vickyguptaa7/')
            }>
            <Text style={styles.socialLinks}>Follow Me</Text>
          </TouchableOpacity>
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
  card: {
    borderRadius: 8,
    overflow: 'hidden',
    margin: 16,
  },
  elevatedCard: {
    backgroundColor: '#CAD5E2',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  headingContainer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  cardImage: {height: 300},
  bodyContainer: {
    padding: 16,
  },
  footerContainer: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  socialLinks: {
    fontSize: 16,
    backgroundColor:'#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
    color:'#333'
  },
});
