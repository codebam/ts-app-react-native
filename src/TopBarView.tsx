import { Text, View, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default ({ setMessages, colorscheme }: any) => {
	return (
		<View
			style={{
				flexDirection: "row",
				width: "100%",
				justifyContent: "space-between",
			}}
		>
			<View style={{ width: "20%" }}>
				<Button
					title={"Load"}
					onPress={async () => {
						const m = await AsyncStorage.getItem("messages");
						if (m !== null) {
							setMessages(JSON.parse(m));
						}
					}}
				/>
			</View>
			<Text
				style={{
					color: colorscheme === "dark" ? "#fff" : undefined,
					fontSize: 20,
					alignContent: "center",
					justifyContent: "center",
					margin: 5,
				}}
			>
				Lem
			</Text>
			<View style={{ width: "20%" }}>
				<Button title={"Clear"} onPress={() => setMessages([])} />
			</View>
		</View>
	);
};
