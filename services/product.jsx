import { fetchPersonal } from "../src/utils/request"

export const allProductsForCategory = async(category) =>{
  const request = await fetchPersonal(`/productos/${category}`);
  const {productos} = await request.json();
  return productos;
};

