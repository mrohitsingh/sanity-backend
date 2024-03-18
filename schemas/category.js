import {MdCategory} from 'react-icons/md'
export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: MdCategory,
  fields: [
    {
      name: 'title',
      title: 'Name',
      type: 'string',
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
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
}
