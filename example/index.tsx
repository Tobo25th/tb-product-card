import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ProductCard,ProductButtons,ProductTitle,ProductImage} from "../.";

const product={
  id:"1",
  title:"Coffee Mug-Card",
  img:"./coffee-mug.png",
}


const App = () => {
  return (
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
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
