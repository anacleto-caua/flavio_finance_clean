import React from 'react';
import { 
  View,
  Text,
  StyleSheet, 
} from 'react-native';

import colors from '../../theme/colors'

export default function Balance() {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={style.itemTitle}>Gastos</Text>
      </View>
    </View>
  );
}

styles = StyleSheet.create({
  container: {

  },
})