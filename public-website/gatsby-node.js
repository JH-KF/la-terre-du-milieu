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
  query allRooms {
    allRoomsJson {
      nodes {
        id
        fr {
          description
          path
          quote
          quoteAuthor
          slug
          title
          informations
        }
        en {
          description
          quote
          path
          quoteAuthor
          slug
          title
          informations
        }
      }
    }
  }
  
`)
  
  allRooms.data.allRoomsJson.nodes.forEach(node => {
    const rooms = allRooms.data.allRoomsJson.nodes;
    Object.keys(translations).forEach(lang => {
      createPage({
        path: `/${node[lang].path}${node[lang].slug}`,
        component: roomTemplate,
        context: {
          locale: lang,
          room: node[lang],
          id : node.id,
          imagesPath: `rooms/${node.id}`,
          otherRooms: rooms.filter(otherRoom => otherRoom.id !== node.id).map(room => { return {id: room.id, ...room[lang]}})
        },
      })
    })
  })
}