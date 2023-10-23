import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	KeyboardAvoidingView,
	SafeAreaView,
	Platform,
	useColorScheme,
	TextInput,
	Button,
	View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MessageView from "./src/MessageView";
import TopBarView from "./src/TopBarView";

export default function App() {
	const colorscheme = useColorScheme();
	// const colorscheme = "dark";
	const styles = StyleSheet.create({
		input: {
			width: "80%",
			margin: 10,
			padding: 10,
			borderRadius: 20,
			color: colorscheme === "dark" ? "#fff" : undefined,
			backgroundColor: colorscheme === "dark" ? "#222" : "#fff",
			fontSize: 16,
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

	AsyncStorage.getItem("messages").then((messages) => {
		if (messages !== null) {
			setMessages(JSON.parse(messages));
		}
	});

	const onPress = async () => {
		const message = text;
		setText("");
		let newMessages = [...messages, { response: false, content: message }];
		setMessages(newMessages);
		const response = await fetch(
			"https://cloudflare-ai-api.codebam.workers.dev/api/question/custom",
			{
				method: "POST",
				body: JSON.stringify({ system: ["My name is Lem"], user: [message] }),
			}
		).then((resp) => resp.json());
		newMessages = [
			...newMessages,
			{ response: true, content: response.response },
		];
		setMessages(newMessages);
		await AsyncStorage.setItem("messages", JSON.stringify(newMessages));
	};

	return (
		<SafeAreaView style={styles.container}>
			<TopBarView setMessages={setMessages} colorscheme={colorscheme} />
			<MessageView messages={messages} colorscheme={colorscheme} />
			<KeyboardAvoidingView
				style={{
					flexDirection: "row",
					width: "100%",
					alignItems: "center",
					backgroundColor: colorscheme === "dark" ? "#111" : "#eee",
					justifyContent: "flex-start",
				}}
				behavior={Platform.OS === "ios" ? "padding" : "height"}
			>
				<TextInput
					style={styles.input}
					placeholder={"Ask me a question..."}
					value={text}
					onChangeText={setText}
				/>
				<View
					style={{
						backgroundColor: "#07f",
						borderRadius: 30,
						margin: 1,
					}}
				>
					<Button color="#fff" title={"Send"} onPress={onPress} />
				</View>
			</KeyboardAvoidingView>
			<StatusBar style="auto" />
		</SafeAreaView>
	);
}
