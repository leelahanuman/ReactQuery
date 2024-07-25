import React from 'react'
import { useParams } from 'react-router-dom';
import useProductID from '../Hook/useProductId';

const ProductDetail = () => {
    const { productId } = useParams();
    const { isLoading, error, data, isFetching, refetch } = useProductID(productId);
    console.log(data, "This is data")

    if (isLoading || isFetching) return <div>Loading...</div>;
    if (error) return <div>An error occurred: {error.message}</div>;
    return (
        <div>
            <h1>ProductDetail</h1>

            <div>
                <button onClick={refetch}>Refetch Product</button>

                {data && (
                    <div>
                        <h2>{data.title}</h2>
                        <p>{data.description}</p>
                        <p>Price: ${data.price} ({data.priceInCents} cents)</p>
                    </div>
                )}
            </div>

        </div>
    )
}

export default ProductDetail