import { Text, TextInput, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { styles } from '../styles/SignUpScreen'

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      
        <Icon name="arrow-left" style={styles.icon} />

        <Text style={styles.title}>Boas-vindas de volta!</Text>
        <Text style={styles.subtitle}>Estamos muito animados em te ver novamente!</Text>

        <Text style={styles.text}>INFORMAÇÕES DE CONTA</Text>

        <TextInput
          style={styles.input}
          placeholderTextColor="lightgrey"
          placeholder="E-mail ou número de telefone"
        />

        <TextInput style={styles.input} placeholderTextColor="lightgrey" placeholder="Senha" />

        <Text style={styles.forgotPasswordText}>Esqueceu sua senha?</Text>
        <Text style={styles.forgotPasswordText}>Utilizar um gerenciador de senha?</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
     
    </View>
  );
};

export default SignUpScreen;