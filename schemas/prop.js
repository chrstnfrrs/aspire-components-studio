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
      name: 'helpers',
      title: 'Helpers',
      type: 'reference',
      type: 'array',
      of: [{type:'reference', to: [{type:'helper'}]}],
      validation: Rule => Rule.required()
    }
  ],
}