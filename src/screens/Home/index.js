import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import Header from "../../components/Header";
import { categories } from "../../components/data/categories";
import CategoryBox from "../../components/CategoryBox";
import ProductHomeItem from "../../components/ProductHomeItem";
import { products } from "../../components/data/products";

const Home = () => {
    const [keyword, setKeyword] = useState(false);
    const [filteredProduct, setFilteredProduct] = useState(products);
    const [selectedCategory, setSelectedCategory] = useState();
    console.log('key', keyword)

    // Begin Search
    useEffect(() => {
        if (selectedCategory && !keyword) {
            const updateProducts = products.filter((product) => product?.category === selectedCategory);
            setFilteredProduct(updateProducts);
        } else if (selectedCategory && keyword) {
            const updateProducts = products.filter((product) => product?.category === selectedCategory && product?.title?.toLowerCase().includes(keyword?.toLowerCase()));
            setFilteredProduct(updateProducts);
        } else if (!selectedCategory && keyword) {
            const updateProducts = products.filter((product) => product?.title?.toLowerCase().includes(keyword?.toLowerCase()));
            setFilteredProduct(updateProducts);
        } else if (!keyword && !selectedCategory){
            setFilteredProduct(products);
        }
    }, [selectedCategory, keyword])
    // End search

    const renderCategoryItem = ({ item, index }) => {
        return <CategoryBox title={item?.title} image={item?.image}></CategoryBox>;
    };
    const renderProductItem = ({ item }) => {
        return <ProductHomeItem {...item} />
    }
    return (
        <SafeAreaView>
            {/* <ScrollView style={styles.container}> */}
            <Header
                showSearch
                onSearch={setKeyword}
                keyword={keyword}
                title="Find All You Need"
            />
            <FlatList
                showsHorizontalScrollIndicator={false}
                style={styles.list}
                horizontal
                data={categories}
                renderItem={renderCategoryItem}
                keyExtractor={(item, index) => String(index)}
            />
            <FlatList
                style={styles.productsList}
                numColumns={2}
                data={filteredProduct}
                renderItem={renderProductItem}
                keyExtractor={(item) => String(item.id)}
                ListFooterComponent={<View style={{height: 200}}/>}
            />
            {/* </ScrollView> */}
        </SafeAreaView>
    );
};
export default Home;