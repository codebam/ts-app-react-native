import { useRef } from "react";
import { Text, View, FlatList, useColorScheme } from "react-native";

export default ({ messages, colorscheme }: any) => {
	const flatList = useRef<FlatList>(null);
	return (
		<View style={{ flex: 1, width: "100%" }}>
			<FlatList
				data={messages}
				ref={flatList}
				onContentSizeChange={() => {
					if (flatList.current !== null) {
						flatList.current.scrollToEnd();
					}
				}}
				renderItem={(item) => (
					<Text
						style={{
							padding: "5%",
							color: colorscheme === "dark" ? "#fff" : undefined,
							backgroundColor: item.item.response
								? colorscheme === "dark"
									? "#222"
									: "#eee"
								: undefined,
							fontSize: 16,
						}}
					>
						{item.item.content}
					</Text>
				)}
			/>
		</View>
	);
};
