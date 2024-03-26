import React, { useState } from 'react';
import { 
  View,
  Text,
  StyleSheet, 
  TouchableOpacity 
} from 'react-native';

import colors from '../../theme/colors'

export default function Movements({ item }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={ () => handleItemPressed() }
      delay
    >

    </TouchableOpacity>
  );
}

styles = StyleSheet.create({
  container: {

  },
})