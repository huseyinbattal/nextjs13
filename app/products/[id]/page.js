import React,{Suspense} from 'react'
import Comments from './Comments'
import ProductDetails from './ProductDetails'

const ProductDetailsPage = ({params}) => {
  return (
    <>
      <Suspense fallback={ <p>Loading products...</p> } >
      <ProductDetails params={params} />
      </Suspense>
      <Suspense fallback={ <p>Loading comments..</p> } >
        <Comments />
        </Suspense>
    </>
  )
}

export default ProductDetailsPage