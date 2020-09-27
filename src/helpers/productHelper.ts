import { ProductModel, Product } from '../models/Product';

const RATE = 0.5;

export const isPalindrome = (text: string): boolean => {
  const result =
    text.length > 2 ? text.split('').reverse().join('') === text : false;
  return result;
};

export const addDiscount = (products: Product[]): Product[] => {
  const productsWithDiscount = products.map((product) => {
    const discount = product.price * RATE;
    product.oldPrice = product.price;
    product.price -= discount;
    product.discountRate = RATE * 100;

    return product;
  });
  return productsWithDiscount;
};

export const findProductById = async (id: number): Promise<Product[]> => {
  const products = await ProductModel.find({ id });

  return products;
};

export const findProductsByBrandOrDescription = async (
  search: string
): Promise<Product[]> => {
  const searchRegex = new RegExp(search, 'i');

  const products = await ProductModel.find({
    $or: [{ brand: searchRegex }, { description: searchRegex }],
  });

  return products;
};
