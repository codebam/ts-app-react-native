import { View, FlatList } from "react-native";
import { Text } from "react-native-paper";

export default ({ messages }: any) => {
	return (
		<View style={{ flex: 1 }}>
			<FlatList
				data={messages}
				renderItem={(item) => {
					console.log(item);
					return <Text>{item.item}</Text>;
				}}
			/>
		</View>
	);
};
