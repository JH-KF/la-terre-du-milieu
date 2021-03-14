const translations = require("./src/config/translations.json")
const path = require("path")

/**
 * Makes sure to create localized paths for each file in the /pages folder.
 * For example, pages/404.js will be converted to /en/404.js and /el/404.js and
 * it will be accessible from https:// .../en/404/ and https:// .../el/404/
 */
exports.onCreatePage = async ({
  page,
  actions: { createPage, deletePage },
}) => {
  // Delete the original page (since we are gonna create localized versions of it)
  await deletePage(page)

  // Create one page for each locale
  await Promise.all(
    Object.keys(translations).map(async lang => {
      const localizedPath = translations[lang].default
        ? page.path
        : `${lang}${page.path}`

      await createPage({
        ...page,
        path: localizedPath,
        context: {
          ...page.context,
          locale: lang,
        },
      })
    })
  )
}

exports.createPages = async ({ graphql, actions }) => {
  const roomTemplate = path.resolve(`src/templates/room.js`)
  const { createPage } = actions
  const allRooms = await graphql(`
  query AllRooms {
    allRoomsJson {
      nodes {
        id
        slug {
          en
          fr
        }
        path {
          en
          fr
        }
      }
    }
  }
  
`)
  
  allRooms.data.allRoomsJson.nodes.forEach(node => {
    Object.keys(node.slug).forEach(lang => {
      createPage({
        path: `/${node.path[lang]}${node.slug[lang]}`,
        component: roomTemplate,
        context: {
          roomId: node.id
        },
      })
    })
  })
}