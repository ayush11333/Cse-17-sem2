// fetch("https://fakestoreapi.com/product")
//     .then((products) => products.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error.message));

const getData = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("fetch error");
    }
}
getData();
