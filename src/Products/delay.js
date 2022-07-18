import { productList } from './Products';

const getById = (id, array) => array.find((iden) => iden.id === id);

const getProducts = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(productList);
  }, 2000);
});

const getAllProductsFromDB = async (setState) => {
  try {
    const result = await getProducts;
    setState(result);
  } catch (error) {
    console.log(error);
    alert('No podemos mostrar los productos en este momento');
  }
};

const getProductById = async (id, setState) => {
  try {
    const result = await getProducts;
    setState(getById(id, result));
  } catch (error) {
    console.log(error);
  }
};

export { getAllProductsFromDB, getProductById };