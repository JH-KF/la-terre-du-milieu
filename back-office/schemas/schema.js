// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
      name: "Activities",
      type: "document",
      title: "activity",
      fields: [
        {
          name: "title",
          type: "string",
          title: "Titre"
        },
        {
          name: "image",
          type: "image",
          title: "Image"
        },
        {
          name: "description",
          type: "string",
          title: "Description"
        },
        {
          name: "url",
          type: "url",
          title: "Lien"
        }
      ]
    },
    {
      name: "Events",
      type: "document",
      title: "event",
      fields: [
        {
          name: "title",
          type: "string",
          title: "Titre"
        },
        {
          name: "image",
          type: "image",
          title: "Image"
        },
        {
          name: "description",
          type: "string",
          title: "Description"
        },
        {
          name: "url",
          type: "url",
          title: "Lien"
        }
      ]
    }
  ]),
})
