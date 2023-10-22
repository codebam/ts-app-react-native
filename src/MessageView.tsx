import { View, Text, FlatList } from "react-native";

export default function MessageView(messages: any) {
	return <View style={{ flex: 1, marginTop: "15%" }}></View>;
	// return (
	// <FlatList
	// data={messages}
	// renderItem={(item) => <Text>{item.toString()}</Text>}
	// style={{ flex: 1, marginTop: "15%" }}
	// />
	// );
}
