import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	View,
	TextInput,
	KeyboardAvoidingView,
} from "react-native";
import { PaperProvider, Button, MD3DarkTheme } from "react-native-paper";
import MessageView from "./src/MessageView";
import { useTheme } from "react-native-paper";

export default function App() {
	const theme = useTheme();
	const styles = StyleSheet.create({
		input: {
			height: "40%",
			margin: "5%",
			borderWidth: 1,
			padding: 10,
			backgroundColor: theme.colors.secondary,
			width: 250,
		},
		container: {
			flex: 1,
			alignItems: "center",
			justifyContent: "center",
			backgroundColor: theme.colors.primary,
		},
	});
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
		<PaperProvider
			theme={{
				...MD3DarkTheme,
			}}
		>
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
					<Button icon="send">send</Button>
				</KeyboardAvoidingView>
				<StatusBar style="auto" />
			</View>
		</PaperProvider>
	);
}
