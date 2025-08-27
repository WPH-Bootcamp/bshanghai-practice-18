// as casting
type Todo2 = {
  title: string;
  priority: "high" | "medium" | "low";
  isComplete: boolean;
};

// casting data JSON response ke tipe todo

const result = fetch("")
  .then((response) => response.json())
  .then((data) => {
    const dataSet = data as Todo2;
    console.log(dataSet.priority);
  });

type Product = {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
};

const jsonString =
  '{"id": 1, "name": "Laptop", "price": 1200, "inStock": true}';

// parse JSON string dan di cast ke Product
const product = JSON.parse(jsonString) as Product;

console.log(product.name);
