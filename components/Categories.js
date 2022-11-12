import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
	return (
		<ScrollView
			contentContainerStyle={{
				paddingHorizontal: 15,
				paddingTop: 10,
			}}
			horizontal
			showsHorizontalScrollIndicator={false}
		>
			<CategoryCard
				imgUrl="https://links.papareact.com/wru"
				title="test"
			/>

			<CategoryCard
				imgUrl="https://links.papareact.com/wru"
				title="test"
			/>

			<CategoryCard
				imgUrl="https://links.papareact.com/wru"
				title="test"
			/>

			<CategoryCard
				imgUrl="https://links.papareact.com/wru"
				title="test"
			/>

			<CategoryCard
				imgUrl="https://links.papareact.com/wru"
				title="test"
			/>

			<CategoryCard
				imgUrl="https://links.papareact.com/wru"
				title="test"
			/>
		</ScrollView>
	);
};

export default Categories;
