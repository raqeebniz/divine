import { type SchemaTypeDefinition } from 'sanity'
import { product } from '../schemas/product_schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product],
}
