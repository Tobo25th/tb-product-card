# TB Product Card 
This is a test package of a product card in a e-shop

### Tobo25th

## Example
```
import {ProductCard,ProductButtons,ProductTitle,ProductImage} from "tb-product-card";
```
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
```