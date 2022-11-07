import React from "react";
import renderer from "react-test-renderer"
import {ProductImage,ProductCard} from "../../src/components"
import { product2 } from "../data/products";


describe('ProductImageTest', () => { 

    test('should be show the productImage correctly', () => {
        const wrapper = renderer.create(
            <ProductImage img="coffee.png"/>
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('it should display the product title', () => {
        const wrapper = renderer.create(
            <ProductCard product={product2} className="customclass">
                {()=>(
                    <ProductImage/>
                )}
            </ProductCard>
        )

        
            expect(wrapper.toJSON()).toMatchSnapshot();



    });






});