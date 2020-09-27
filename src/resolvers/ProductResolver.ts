import { Query, Resolver, Arg } from 'type-graphql';
import { Product } from '../models/Product';
import {
  isPalindrome,
  addDiscount,
  findProductById,
  findProductsByBrandOrDescription,
} from '../helpers/productHelper';

@Resolver()
class ProductResolver {
  @Query(() => [Product], { description: 'Product Information' })
  async getProducts(@Arg('search') search: string): Promise<Product[]> {
    const products = +search
      ? findProductById(+search)
      : findProductsByBrandOrDescription(search);

    return isPalindrome(search) ? addDiscount(await products) : products;
  }
}

export default ProductResolver;
