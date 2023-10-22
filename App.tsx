import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	KeyboardAvoidingView,
	SafeAreaView,
	Platform,
	useColorScheme,
	TextInput,
	Button,
} from "react-native";
import MessageView from "./src/MessageView";
import TopBarView from "./src/TopBarView";

export default function App() {
	const colorscheme = useColorScheme();
	const styles = StyleSheet.create({
		input: {
			width: "70%",
			color: colorscheme === "dark" ? "#fff" : undefined,
		},
		container: {
			flex: 1,
			alignItems: "center",
			justifyContent: "center",
			backgroundColor: colorscheme === "dark" ? "#000" : undefined,
		},
	});
	const [text, setText] = useState("");
	const [messages, setMessages] = useState<
		{ response: boolean; content: string }[]
	>([]);

	const onPress = async () => {
		const message = text;
		setText("");
		let newMessages = [...messages, { response: false, content: message }];
		setMessages(newMessages);
		const response = await fetch(
			"https://cloudflare-ai-api.codebam.workers.dev/api/question",
			{ method: "POST", body: JSON.stringify(message) }
		).then((resp) => resp.json());
		newMessages = [
			...newMessages,
			{ response: true, content: response.response },
		];
		setMessages(newMessages);
	};

	return (
		<SafeAreaView style={styles.container}>
			<TopBarView setMessages={setMessages} />
			<MessageView messages={messages} colorscheme={colorscheme} />
			<KeyboardAvoidingView
				style={{
					flexDirection: "row",
					width: "100%",
					alignItems: "center",
					justifyContent: "center",
				}}
				behavior={Platform.OS === "ios" ? "padding" : "height"}
			>
				<TextInput
					style={styles.input}
					placeholder={"Ask me a question..."}
					value={text}
					onChangeText={setText}
				/>
				<Button title={"Send"} onPress={onPress} />
			</KeyboardAvoidingView>
			<StatusBar style="light" />
		</SafeAreaView>
	);
}
