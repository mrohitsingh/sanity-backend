import {MdPerson} from 'react-icons/md'
export default {
  name: 'author',
  type: 'document',
  title: 'Author',
  icon: MdPerson,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'about',
      type: 'string',
      title: 'About',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
  ],
}
