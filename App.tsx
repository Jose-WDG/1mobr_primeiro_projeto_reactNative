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
    </View>
  );
};
function Section({ children, title }: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
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
          <Section title="José Ramalho da silva neto">
            <Text style={styles.highlight}>Desenvolvedor mobile </Text>
            altamente experiente, com uma sólida formação em análise e desenvolvimento de sistemas e 3 anos de
            experiência em desenvolvimento de aplicativos móveis. Meu foco principal é trabalhar com grandes
            corporações financeiras, criando aplicativos inovadores e funcionais que atendam às necessidades
            específicas de seus clientes. Com um bom conhecimento em tecnologias móveis, sou capaz de criar
            aplicativos móveis robustos e escaláveis. Conhecimentos em iOS e Android, estou sempre procurando
            maneiras de usar as tecnologias mais recentes para aprimorar os projetos. Excelente comunicação e
            trabalho em estreita colaboração com minha equipe para garantir máxima qualidade. Comprometido em
            entregar projetos dentro do prazo. Quando não estou trabalhando, gosto de jogar video game e adoro
            viajar para novos lugares. Estou sempre procurando maneiras de crescer na minha carreira como desenvolvedor,
            buscando aprimorar minhas habilidades e aprender novas tecnologias para fazer projetos de qualidade.
          </Section>
        </View>
      </ScrollView>

    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    marginBottom: 32,
    paddingHorizontal: 24,
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
