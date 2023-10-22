import { Button, Text, View, FlatList, useColorScheme } from "react-native";

export default ({ setMessages }: any) => {
	return (
		<View
			style={{
				alignContent: "flex-end",
				justifyContent: "flex-end",
				width: "100%",
			}}
		>
			<Button title={"Clear"} onPress={() => setMessages([])} />
		</View>
	);
};
