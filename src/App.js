import React from 'react';
import {SafeAreaView} from 'react-native';
import Logo from './components/Logo';
import ProductList from './components/ProductList';
import Search from './components/Search';

export default function App() {
  return (
    <SafeAreaView>
      <Logo />
      <Search />
      <ProductList />
    </SafeAreaView>
  );
}
