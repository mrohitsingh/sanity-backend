import {FaCommentDots} from 'react-icons/fa'
export default {
  name: 'comment',
  title: 'Comment',
  type: 'document',
  icon: FaCommentDots,
  fields: [
    {
      name: 'name',
      type: 'string',
    },
    {
      title: 'Approved',
      name: 'approved',
      type: 'boolean',
      description: 'Check this box to approve this comment',
    },
    {
      name: 'email',
      type: 'string',
    },
    {
      name: 'comment',
      type: 'text',
    },
    {
      name: 'blog',
      type: 'reference',
      to: [{type: 'blog'}],
    },
  ],
}
