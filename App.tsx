import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	View,
	KeyboardAvoidingView,
	SafeAreaView,
} from "react-native";
import {
	PaperProvider,
	Button,
	MD3DarkTheme,
	TextInput,
} from "react-native-paper";
import MessageView from "./src/MessageView";
import { useTheme } from "react-native-paper";

export default function App() {
	const theme = useTheme();
	const styles = StyleSheet.create({
		input: {
			backgroundColor: theme.colors.onBackground,
			width: "70%",
		},
		container: {
			flex: 1,
			alignItems: "center",
			justifyContent: "center",
			backgroundColor: "#000",
		},
	});
	const [text, setText] = useState("");
	const [messages, setMessages] = useState([
		{ response: false, content: "example message" },
		{ response: true, content: "hello world" },
		{ response: false, content: "foobar" },
		{ response: true, content: Date() },
	]);
	return (
		<PaperProvider theme={{ ...MD3DarkTheme }}>
			<SafeAreaView style={styles.container}>
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
					<Button
						icon="send"
						onPress={(e) => setMessages([...messages, ...messages])}
					>
						send
					</Button>
				</KeyboardAvoidingView>
				<StatusBar style="light" />
			</SafeAreaView>
		</PaperProvider>
	);
}
