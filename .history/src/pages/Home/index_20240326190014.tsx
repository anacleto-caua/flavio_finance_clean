import React, { useCallback, useEffect, useState } from 'react';
import { 
  View,
  StyleSheet,
  Text,
  StatusBar,
  FlatList,
  ScrollView, 
} from 'react-native';

import colors from '../../theme/colors'

export default function Home() {
  return (
    <view style={styles.container}>
      <View style={styles.header}>
        <Header name={username} />

        <Balance saldo="9.500,00" gastos="2.500,00" />

        <Actions />
      </View>

      <ScrollView
        style={}
      >

      </ScrollView>
    </view>
  );
}

styles = StyleSheet.create({
  container: {

  },
})