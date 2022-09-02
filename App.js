import { StyleSheet, SafeAreaView } from 'react-native';
import Router from './Routers/Router';
import { AuthProvider } from './context/context';

export default function App() {
  return (
    <AuthProvider>
      <SafeAreaView style={styles.container}>
        <Router />
      </SafeAreaView>
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
