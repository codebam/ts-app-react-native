import { View, Button } from "react-native";

export default ({ setMessages }: any) => {
	return (
		<View>
			<Button title={"Clear"} onPress={() => setMessages([])} />
		</View>
	);
};
