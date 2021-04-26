// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import { MdEvent, MdPlace } from 'react-icons/md'


// Since schemas are code, we can programmatically build
// fields to hold translated values. We'll use this array
// of languages to determine which fields to define.
const supportedLanguages = [
  { id: 'fr', title: 'Français', isDefault: true },
  { id: 'de', title: 'Allemand'},
  { id: 'en', title: 'Anglais'}
]

const baseLanguage = supportedLanguages.find(l => l.isDefault)

const localeString = {
  title: 'Localized string',
  name: 'localeString',
  type: 'object',
  // Fieldsets can be used to group object fields.
  // Here we omit a fieldset for the "default language",
  // making it stand out as the main field.
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: true }
    }
  ],
  // Dynamically define one field per language
  fields: supportedLanguages.map(lang => ({
    title: lang.title,
    name: lang.id,
    type: 'string',
    validation: Rule => Rule.required()
  }))
}

const localeText = {
  title: 'Localized text',
  name: 'localeText',
  type: 'object',
  // Fieldsets can be used to group object fields.
  // Here we omit a fieldset for the "default language",
  // making it stand out as the main field.
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: true }
    }
  ],
  // Dynamically define one field per language
  fields: supportedLanguages.map(lang => ({
    title: lang.title,
    name: lang.id,
    type: 'text',
    validation: Rule => Rule.required()
  }))
}

const localeBlocks = {
  title: 'Localized block',
  name: 'localeBlocks',
  type: 'object',
  // Fieldsets can be used to group object fields.
  // Here we omit a fieldset for the "default language",
  // making it stand out as the main field.
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: true }
    }
  ],
  // Dynamically define one field per language
  fields: supportedLanguages.map(lang => ({
    title: lang.title,
    name: lang.id,
    type: 'array', 
    of: [{type: 'block'}]
  }))
}

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
      title: "Points d'intérêt",
      name: "POI",
      type: "document",
      icon: MdPlace,
      fields: [
        {
          title: "Titre",
          name: "title",
          type: "localeString",
        },
        {
          name: "image",
          type: "image",
          title: "Image",
          validation: Rule => Rule.required()
        },
        {
          title: "Description",
          name: "description",
          type: "localeText",
        },
        {
          title: "Lien",
          name: "url",
          type: "url"
        }
      ],
      preview: {
        select: {
          title: `title.${baseLanguage.id}`,
          subtitle: `description.${baseLanguage.id}`,
          media: "image"
        }
      }
    },
    {
      title: "Évènements",
      name: "Events",
      type: "document",
      icon: MdEvent,
      fields: [      
        {
          title: "Titre",
          name: "title",
          type: "localeString"
        },
        {
          title: "Image",
          name: "image",
          type: "image",
          validation: Rule => Rule.required()
        },
        {
          title: "Description",
          name: "description",
          type: "localeText",
        },
        {
          name: "url",
          type: "url",
          title: "Lien"
        }
      ],
      preview: {
        select: {
          title: `title.${baseLanguage.id}`,
          subtitle: `description.${baseLanguage.id}`,
          media: "image"
        }
      }
    },
    {
      name: 'legalMentions',
      type: 'document',
      __experimental_actions: ['update','publish'], 
      initialValue: {
        _type: "legalMentions",
        _id: "legal-mentions",
      },
      fields: [
        {
          title: "Contenu de la page",
          name: "content",
          type: "localeBlocks"
        },
      ]
    },
    {
      name: 'locationContract',
      type: 'document',
      __experimental_actions: ['update','publish'], 
      initialValue: {
        _type: "locationContract",
        _id: "location-contract",
      },
      fields: [
        {
          title: "Contenu de la page",
          name: "content",
          type: "localeBlocks"
        },
      ]
    },
    localeString,
    localeText,
    localeBlocks
  ]),
})
