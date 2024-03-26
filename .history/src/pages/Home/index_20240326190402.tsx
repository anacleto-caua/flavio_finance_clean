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

const list = [
  {
    id: 1,
    label: 'Boleto conta luz',
    value: '235,89',
    date: '17'
  },
]

export default function Home() {
  return (
    <view style={styles.container}>
      <View style={styles.header}>
        <Header name={username} />

        <Balance saldo="9.500,00" gastos="2.500,00" />

        <Actions />
      </View>

      <ScrollView
        style={styles.scrollArea}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Últimas movimentações</Text>
        <FlatList
          style={styles.list}
          data={list}
          keyExtractor={ (item) => String(item.id) }
        >

        </FlatList>
      </ScrollView>
    </view>
  );
}

styles = StyleSheet.create({
  container: {

  },
})