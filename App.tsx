import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	View,
	TextInput,
	Button,
	KeyboardAvoidingView,
} from "react-native";
import MessageView from "./src/MessageView";

export default function App() {
	const [text, setText] = useState("");
	const [messages, setMessages] = useState([
		"example message",
		"hello world",
		"why are these here",
		"why are these here",
		"why are these here",
		"why are these here",
		"why are these here",
	]);
	return (
		<View style={styles.container}>
			<MessageView messages={messages} />
			<KeyboardAvoidingView
				style={{
					flexDirection: "row",
					width: "100%",
					alignItems: "center",
					justifyContent: "center",
				}}
				behavior={"padding"}
			>
				<TextInput style={styles.input} value={text} onChangeText={setText} />
				<Button title={"Send"} />
			</KeyboardAvoidingView>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		height: "40%",
		margin: "5%",
		borderWidth: 1,
		padding: 10,
		paddingRight: "55%",
	},
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
