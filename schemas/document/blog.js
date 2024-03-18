import {GiNotebook} from 'react-icons/gi'
export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  icon: GiNotebook,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      name: 'metadesc',
      type: 'string',
      title: 'Meta Description',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Blog Image',
      name: 'blogImage',
      type: 'customImage',
    },
    {
      name: 'postedAt',
      type: 'date',
      title: 'Posted At',
    },
    {
      name: 'author',
      type: 'object',
      fields: [
        {
          name: 'author',
          type: 'reference',
          title: 'Author',
          to: [{type: 'author'}],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'blogImage',
      subtitle: 'postedAt',
    },
  },
}
