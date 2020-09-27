import { prop, getModelForClass } from '@typegoose/typegoose';
import { Field, ObjectType, Int, Float } from 'type-graphql';

@ObjectType({ description: 'Product Information' })
export class Product {
  @prop()
  readonly _id!: string;

  @Field(() => Int, { description: 'Product ID' })
  @prop()
  id!: number;

  @Field(() => String, { description: 'Brand of the product' })
  @prop()
  brand!: string;

  @Field(() => String, { description: 'Description of the product' })
  @prop()
  description!: string;

  @Field(() => String, { description: 'Product image path' })
  @prop()
  image!: string;

  @Field(() => Float, { description: 'Price of the Product' })
  @prop()
  price!: number;

  @Field(() => Float, {
    description: 'Price before of apply discount',
    nullable: true,
  })
  oldPrice?: number;

  @Field(() => Float, {
    description: 'Discount rate',
    nullable: true,
  })
  discountRate?: number;
}

export const ProductModel = getModelForClass(Product);
