import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#36393E",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    marginTop: 10,
  },
  headerContainer: {
    backgroundColor: "#000",
    height: 160,
  },

  avatarContainer: {
    position: "relative",
    marginRight: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginTop: 100,
    marginLeft: 20,
    border: "solid",
    borderWidth: 5,
    borderColor: "#36393E",
  },
  onlineStatus: {
    bottom: 20,
    left: 75,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "lightgreen",
  },
  userInfo: {
    marginTop: 50,
    backgroundColor: "#040404",
    paddingHorizontal: 10,
    marginHorizontal: 15,
    borderRadius: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginTop: 15,
  },
  tag: {
    fontSize: 16,
    color: "lightgrey",
    paddingBottom: 15,
  },
  separator: {
    height: 1,
    backgroundColor: "#36393E",
    marginBottom: 15,
  },
  content: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  infoContainer: {
    flexDirection: "row",
    marginBottom: 8,
  },
  label: {
    width: 80,
    fontWeight: "bold",
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
    height: 160,
  },
  icon: {
    top: 20,
    left: 10,
    marginBottom: 25,
    color: "white",
    fontSize: 24,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 50,
  },
  iconInput: {
    color: "black",
    backgroundColor: "lightgrey",
    borderRadius: 8,
    width: 12,
    height: 12,
    bottom: 40,
    left: 300,
  },
  editIcon: {
    color: "white",
    bottom: 90,
    left: 80,
  },
  editIcon2: {
    color: "white",
    bottom: 200,
    left: 360,
  },
});
