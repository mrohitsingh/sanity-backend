export default {
  name: 'customImage',
  type: 'image',
  title: 'Custom Image',
  options: {
    hotspot: true, // <-- Defaults to false
  },
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative Text',
      description: 'Important for SEO and accessiblity.',
      validation: (Rule) => Rule.error("alt text can't be empty").required(),
      options: {
        isHighlighted: true,
      },
    },
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'alt',
    },
  },
}
