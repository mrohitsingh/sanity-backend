export default {
  name: 'codeBlock',
  type: 'object',
  title: 'Code Block',
  fields: [
    {
      type: 'code',
      name: 'code',
      title: 'Code',

      options: {
        withFilename: true,
      },
    },
  ],

  preview: {
    select: {
      title: 'code.code',
    },
  },
}
