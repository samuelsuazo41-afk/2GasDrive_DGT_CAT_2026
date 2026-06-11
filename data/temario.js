import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TEMARIO = [
  { 
    id: 1, 
    titulo: "1. Senyals de trànsit", 
    pdf: require('../assets/pdfs/01_Senyals_Tomo_I_RD_465_2025.pdf') 
  },
  { 
    id: 2, 
    titulo: "2. Normes de circulació", 
    pdf: require('../assets/pdfs/02_Normes_Circulacio.pdf') 
  },
  { 
    id: 3, 
    titulo: "3. Prioritat de pas i interseccions", 
    pdf: require('../assets/pdfs/03_Prioritat_Pas.pdf') 
  },
  { 
    id: 4, 
    titulo: "4. Velocitat i distàncies", 
    pdf: require('../assets/pdfs/04_Velocitat_Distancies.pdf') 
  },
  { 
    id: 5, 
    titulo: "5. Canvis de direcció i carril", 
    pdf: require('../assets/pdfs/05_Canvis_Direccio.pdf') 
  },
  { 
    id: 6, 
    titulo: "6. Parada i estacionament", 
    pdf: require('../assets/pdfs/06_Parada_Estacionament.pdf') 
  },
  { 
    id: 7, 
    titulo: "7. Llums i senyals acústics", 
    pdf: require('../assets/pdfs/07_Llums_Senyals_Acustics.pdf') 
  },
  { 
    id: 8, 
    titulo: "8. Conducció en situacions especials", 
    pdf: require('../assets/pdfs/08_Conduccio_Especials.pdf') 
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
            onPress={() => navigation.navigate('PDFViewer', { pdfSource: item.pdf, title: item.titulo })}
          >
            <Text style={styles.title}>{item.titulo}</Text>
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
