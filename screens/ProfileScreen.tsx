import React from "react";
import { View, Image, Text, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { Entypo } from "react-native-vector-icons";
import { styles } from "../styles/ProfileScreen";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-left" style={styles.icon} />
        <Text style={styles.title}>Perfis</Text>
      </View>

      <View style={styles.headerContainer}>
        <Image source={require("../assets/perfil.jpg")} style={styles.avatar} />
        <Text style={styles.onlineStatus}></Text>
        <Entypo name="edit" style={styles.editIcon} />
        <Entypo name="edit" style={styles.editIcon2} />
      </View>

      <View style={styles.userInfo}>
        <Text style={styles.name}>Viniz</Text>
        <Text style={styles.tag}>viniz01</Text>
        <Text style={styles.tag}>Só não há jeito para a morte.</Text>
        <View style={styles.separator} />
        <Text style={styles.text}>NOME EXIBIDO</Text>
        <View>
          <TextInput style={styles.input} placeholderTextColor="lightgrey" placeholder="Viniz" />
          <Icon name="x" style={styles.iconInput} />
        </View>
        <Text style={styles.text}>PRONOMES</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="lightgrey"
          placeholder="Toque para adicionar pronomes"
        />
        <Text style={styles.text}>SOBRE MIM</Text>
        <TextInput
          style={styles.inputArea}
          placeholderTextColor="lightgrey"
          placeholder="E-mail ou número de telefone"
        />
      </View>
    </View>
  );
};

export default ProfileScreen;
