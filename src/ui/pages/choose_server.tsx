import { useState } from "react";
import { Text, TextInput, Button } from "react-native";

const styles = {
	div: {
		flex: 1,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
};

const ChooseServer = () => {
	const [server, setServer] = useState("");
	const onPress = () => {};
	return (
		<>
			<div style={styles.div}>
				<TextInput value={server} onChangeText={setServer} />
				<Button title="Done" onPress={onPress} />
			</div>
		</>
	);
};

export default ChooseServer;
