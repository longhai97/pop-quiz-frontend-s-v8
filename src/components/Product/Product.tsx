import React from 'react';
import {
  View,
  Text,
  Pressable,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { Colors,  ColorsTitle, FontSize } from "../../theme/const";

const { width } = Dimensions.get('window');

const Product = ({ item }: any) => {
  return (
    <Pressable
      style={styles.container}
      // onPress={() => navigation.navigate('Details')}
    >
      {/* Image */}
      <Image
        source={{
          uri: item.image,
        }}
        style={styles.image}
      />
      <View style={styles.titleContainer}>
        {/* Title */}
        <Text style={styles.textBold} numberOfLines={1}>
          {item.title}
        </Text>
        {/* Description */}
        <Text style={styles.subTitle} numberOfLines={2}>
          {item.description}
        </Text>
        {/* Price */}
        <Text style={[styles.textBold, styles.textPrimary]}>{item.price}</Text>
      </View>
    </Pressable>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    width: width / 2.2,
    backgroundColor: 'white',
    marginVertical: 4,
    marginRight: 4,
    borderRadius: 20,
    margin: 10,
  },
  textBold: {
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: FontSize.tiny,
    color: ColorsTitle.grey,
  },
  textPrimary: {
    color: Colors.primary,
  },
  image: {
    width: '100%',
    height: 180,
    alignSelf: 'center',
    borderRadius: 20,
    resizeMode: 'cover',
  },
  titleContainer: {
    padding: 8,
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,
  },
});
