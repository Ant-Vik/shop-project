const products = [
    {
        id:1,
        name:"iPhone X",
        description:"This is iPhone X",
        capacity:256,
        type:"phone",
        price:2000,
        image:'/images/products/icon (12).png',
    },
    {
        id:2,
        name:"iPhone 8",
        description:"This is iPhone 8",
        capacity:124,
        type:"phone",
        price:1500,
        image:'/images/products/icon (15).png'
    },
    {
        id:3,
        name:"iPhone 7",
        description:"This is iPhone 7",
        capacity:64,
        type:"phone",
        price:1000,
        image:'/images/products/icon (12).png',
    },
    {
        id:4,
        name:"iPhone 6",
        description:"This is iPhone 6",
        capacity:32,
        type:"phone",
        price:500,
        image:'/images/products/icon (15).png'
    },
];


export const getProductsMap =(array) => (array.reduce((accObj,product)=>({
    ...accObj,
    [product.id] : product
}),{}))


export default products