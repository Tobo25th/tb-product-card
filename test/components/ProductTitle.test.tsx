import React from "react";
import renderer from "react-test-renderer";
import {ProductTitle,ProductCard} from "../../src/components"
import {product1} from "../data/products";


describe('ProductTitle', () => {
    test("should be show the component with the custom title correctly",()=>{
        const wrapper = renderer.create(
            <ProductTitle title="custom product" className="customclass"/>
        )

        
            expect(wrapper.toJSON()).toMatchSnapshot();

    });
    test('it should display the product title', () => {
        const wrapper = renderer.create(
            <ProductCard product={product1} className="customclass">
                {()=>(
                    <ProductTitle/>
                )}
            </ProductCard>
        )

        
            expect(wrapper.toJSON()).toMatchSnapshot();



    });

})