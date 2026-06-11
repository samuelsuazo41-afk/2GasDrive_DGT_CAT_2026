import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TEMARIO = [
  { 
    id: 1, 
    titulo: "1. Senyals de trànsit", 
    pdf: require('./01_Senyals_Tomo_I_RD_465_2025.pdf') 
  },
  { 
    id: 2, 
    titulo: "2. Normes de circulació", 
    pdf: null  // aún no subiste este PDF
  },
  { 
    id: 3, 
    titulo: "3. Prioritat de pas i interseccions", 
    pdf: null
  },
  { 
    id: 4, 
    titulo: "4. Velocitat i distàncies", 
    pdf: null
  },
  { 
    id: 5, 
    titulo: "5. Canvis de direcció i carril", 
    pdf: null
  },
  { 
    id: 6, 
    titulo: "6. Parada i estacionament", 
    pdf: null
  },
  { 
    id: 7, 
    titulo: "7. Llums i senyals acústics", 
    pdf: null
  },
  { 
    id: 8, 
    titulo: "8. Conducció en situacions especials", 
    pdf: null
  }
];

export default function Temario() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={TEMARIO}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              if (item.pdf) {
                navigation.navigate('PDFViewer', { pdfSource: item.pdf, title: item.titulo });
              }
            }}
            disabled={!item.pdf}
          >
            <Text style={[styles.title, !item.pdf && { color: '#aaa' }]}>
              {item.titulo}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  item: { padding: 16, borderBottomWidth: 1, borderBottomColor: '#ddd' },
  title: { fontSize: 16, fontWeight: 'bold' }
});