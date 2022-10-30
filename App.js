import axios, { Axios } from 'axios';
import React, { useState } from 'react';
import { ActivityIndicator, Alert, FlatList, RefreshControl, StyleSheet, Text, TouchableOpacity, View, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { Navigation } from './screens/Navigation';


export default function App() {

  return <Navigation></Navigation>;
  // return (
  //   <View>
  //     <StatusBar theme="auto" />
  //     <Navigation></Navigation>
  //   </View >
  // );
}
