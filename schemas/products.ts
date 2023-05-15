import {Rule, SchemaTypeDefinition} from 'sanity'

export const product: SchemaTypeDefinition = {
  name: 'product',
  title: 'product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (rule: Rule) => rule.required(),
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{type: 'image'}],
      validation: (rule: Rule) => rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: 'details',
      title: 'Details',
      type: 'string',
      //   validation: (rule: Rule) => rule.required(),
    },
  ],
}
