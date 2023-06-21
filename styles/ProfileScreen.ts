import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#36393E',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
    },
    avatarContainer: {
      position: 'relative',
      marginRight: 16,
    },
    avatar: {
      width: 80,
      height: 80,
      borderRadius: 40,
    },
    onlineStatus: {
      position: 'absolute',
      bottom: 4,
      right: 4,
      width: 16,
      height: 16,
      borderRadius: 8,
      backgroundColor: 'green',
    },
    userInfo: {
      marginTop: 20,
      backgroundColor: "#040404",
      paddingHorizontal: 10,
      marginHorizontal: 15,
      borderRadius: 15,
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
      color: "white",
      marginTop: 15,
    },
    tag: {
      fontSize: 16,
      color: 'lightgrey',
      paddingBottom: 15,
    },
    separator: {
      height: 1,
      backgroundColor: '#36393E',
      marginBottom: 15,
      
    },
    content: {
      padding: 16,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    infoContainer: {
      flexDirection: 'row',
      marginBottom: 8,
    },
    label: {
      width: 80,
      fontWeight: 'bold',
    },
    value: {
      flex: 1,
    },
    text: {
      color: "lightgrey",
      fontWeight: "bold",
      marginVertical: 5,
    },
    input: {
      backgroundColor: "#040404",
      marginVertical: 5,
      padding: 15,
      color: "white",
      borderWidth: 2,
      borderStyle: "solid",
      borderColor: "#36393E",
      borderRadius: 5,
    },
    inputArea: {
      backgroundColor: "#040404",
      marginVertical: 5,
      padding: 15,
      color: "white",
      borderWidth: 2,
      borderStyle: "solid",
      borderColor: "#36393E",
      borderRadius: 5,
      height: 160
    }
  });
  
  