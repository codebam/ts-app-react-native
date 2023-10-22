import { View, FlatList } from "react-native";
import { Text, useTheme } from "react-native-paper";

export default ({ messages }: any) => {
	const theme = useTheme();
	return (
		<View style={{ flex: 1, width: "100%" }}>
			<FlatList
				data={messages}
				renderItem={(item) => (
					<Text
						style={{
							padding: "5%",
							backgroundColor: item.item.response
								? theme.colors.background
								: undefined,
							color: theme.colors.onBackground,
						}}
					>
						{item.item.content}
					</Text>
				)}
			/>
		</View>
	);
};
