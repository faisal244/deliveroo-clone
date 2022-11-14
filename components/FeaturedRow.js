import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, description }) => {
	return (
		<View>
			<View className="mt-4 flex-row items-center justify-between px-4">
				<Text className="font-bold text-lg">{title}</Text>
				<ArrowRightIcon color="#00CCBB" />
			</View>

			<Text className="text-xs text-gray-500 px-4">{description}</Text>

			<ScrollView
				horizontal
				contentContainerStyle={{ paddingHorizontal: 15 }}
				showHorizonalScrollIndicator={false}
				className="pt-4"
			>
				{/* RestaurantCards... */}
				<RestaurantCard
					id
					imgUrl={"https://links.papareact.com/wru"}
					title="Yo! Sushi"
					rating={4.5}
					genre="Japanese"
					address="4-6 St. James's Market, London SW1Y 4AH"
					short_description="This is a test description"
					dishes={[]}
					long={20}
					lat={123}
				/>

				<RestaurantCard
					id
					imgUrl={"https://links.papareact.com/wru"}
					title="Yo! Sushi"
					rating={4.5}
					genre="Japanese"
					address="4-6 St. James's Market, London SW1Y 4AH"
					short_description="This is a test description"
					dishes={[]}
					long={20}
					lat={123}
				/>

				<RestaurantCard
					id
					imgUrl={"https://links.papareact.com/wru"}
					title="Yo! Sushi"
					rating={4.5}
					genre="Japanese"
					address="4-6 St. James's Market, London SW1Y 4AH"
					short_description="This is a test description"
					dishes={[]}
					long={20}
					lat={123}
				/>
			</ScrollView>
		</View>
	);
};

export default FeaturedRow;
