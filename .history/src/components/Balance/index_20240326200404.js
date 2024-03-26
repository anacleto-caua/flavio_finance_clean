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
        <Text style={styles.itemTitle}>Gastos</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}
        </View>
      </View>
    </View>
  );
}

styles = StyleSheet.create({
  container: {

  },
})