async function ProductList() {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products;
}
export default async function Page() {
  let products = await ProductList();
  console.log(products);
  return (
    <div>
      <h1>Server ProductList</h1>
      {products.map((item) => (
        <div>
          <h3>{item.title}</h3>
        </div>
      ))}
    </div>
  );
}
export function generateMetadata() {
  return {
    title: "Server ProductList",
    description: "Server ProductList Description ",
  };
}
