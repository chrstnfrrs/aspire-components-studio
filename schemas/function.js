import { AiOutlineFunction } from 'react-icons/ai'

export default {
  name: 'function',
  title: 'Functions',
  type: 'document',
  icon: AiOutlineFunction,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Factory', value: 'factory'}
        ],
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'classes',
      title: 'Classes',
      type: 'array',
      of: [{type:'reference', to: [{type:'class'}]}],
      validation: Rule => Rule.required()
    }
  ],
}