import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./assets/foto-jose.jpg')} />
      <Text
        style={[
          styles.sectionTitle,
          {
            color: '#ed145b',
            margin: 8,
          },
        ]}>
        José Ramalho da silva neto
      </Text>
    </View>
  );
};
function SectionCard({ children, title }: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={[styles.cardContainer, { backgroundColor: '#262a2db5' }]}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: '#ed145b',
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: Colors.light
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  //const imageUrl = require('./assets/foto-jose.jpg');
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.background}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Header />
          <SectionCard title="Desenvolvedor mobile">
            Com uma sólida formação em análise e desenvolvimento de sistemas e 3 anos de experiência em desenvolvimento de aplicativos móveis.
          </SectionCard>
          <SectionCard title="Foco em grandes corporações financeiras">
            Criando aplicativos inovadores e funcionais que atendam às necessidades específicas de seus clientes.
          </SectionCard>
          <SectionCard title="Capacidade de criar aplicativos móveis robustos e escaláveis">
            Com um bom conhecimento em tecnologias móveis, estou sempre procurando maneiras de usar as tecnologias mais recentes para aprimorar os projetos.
          </SectionCard>
          <SectionCard title="Excelente comunicação e trabalho em equipe">
            Trabalho em estreita colaboração com minha equipe para garantir máxima qualidade. Comprometido em entregar projetos dentro do prazo.
          </SectionCard>
          <SectionCard title="Interesses pessoais">
            Quando não estou trabalhando, gosto de jogar videogame e adoro viajar para novos lugares.
          </SectionCard>
          <SectionCard title="Busca constante por crescimento e aprendizado">
            Estou sempre procurando maneiras de crescer na minha carreira como desenvolvedor, aprimorando minhas habilidades e aprendendo novas tecnologias para fazer projetos de qualidade.
          </SectionCard>
        </View>
      </ScrollView>

    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 150,
  },
  background: {
    backgroundColor: '#151819'
  },
});

export default App;
