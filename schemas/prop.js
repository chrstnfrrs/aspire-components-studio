import { IoExtensionPuzzleOutline } from 'react-icons/io5'

export default {
  name: 'prop',
  title: 'Props',
  type: 'document',
  icon: IoExtensionPuzzleOutline,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'function',
      title: 'Functions',
      type: 'reference',
      type: 'array',
      of: [{type:'reference', to: [{type:'function'}]}],
      validation: Rule => Rule.required()
    }
  ],
}