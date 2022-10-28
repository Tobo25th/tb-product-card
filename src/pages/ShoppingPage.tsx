import React from "react";
import { ProductCard, ProductImage, ProductTitle,ProductButtons } from "../components"
import { products } from "../data/products";

import "../styles/custom-styles.css";

const product=products[0]



export const ShoppingPage = () => {
  

  
  
  
  
  return (
    <div>
        <h1>Shopping Store</h1>
        <hr/>
        <div
        style={{
          display:"flex",
          flexDirection:"row",
          flexWrap:"wrap"
        }}
        >
          
        <ProductCard product={product}
        initialValues={{
          count:4,
          maxCount:10
        }}
        >

          {
            ({reset,count,isMaxCountReached,increaseBy,maxCount})=>(
              <>  
                <ProductImage img=""/>
                <ProductTitle />
                <ProductButtons/>
              </>

            )
          }
        </ProductCard>

         


       
        
        </div>
         
        
    </div>
  )
}
