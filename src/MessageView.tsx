import { Text, View, FlatList, useColorScheme } from "react-native";

export default ({ messages, colorscheme }: any) => {
	return (
		<View style={{ flex: 1, width: "100%" }}>
			<FlatList
				data={messages}
				renderItem={(item) => (
					<Text
						style={{
							padding: "5%",
							color: colorscheme === "dark" ? "#fff" : undefined,
						}}
					>
						{item.item.content}
					</Text>
				)}
			/>
		</View>
	);
};
