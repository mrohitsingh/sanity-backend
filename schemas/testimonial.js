import {FaComments} from 'react-icons/fa'
export default {
  name: 'testimonial',
  type: 'document',
  title: 'Testimonial',
  icon: FaComments,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Service Title',
    },
    {
      name: 't_image',
      type: 'image',
      title: 'Testimonial Image',
    },
    {
      name: 'profile',
      type: 'string',
      title: 'Profile Name',
    },
    {
      name: 'desc',
      type: 'string',
      title: 'Description',
    },
  ],
}
