import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'bermuda pizza',

  projectId: 'e8gz3d9f',
  dataset: 'b-pizza',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
