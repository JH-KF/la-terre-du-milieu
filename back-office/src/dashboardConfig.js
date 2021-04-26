export default {
    widgets: [
        {
        name: 'netlify',
        options: {
          title: 'La Terre du Milieu',
          sites: [
            {
              title: '[Production] La Terre du Milieu',
              apiId: '7428330d-6ff0-49e0-971d-743a22da45cd',
              buildHookId: '60870ec12264f014fb5949af',
              name: 'laterredumilieu-master',
              url: 'https://www.laterredumilieu.com'
            },
            {
              title: '[Test] La Terre du Milieu',
              apiId: '37da5863-1738-4c26-87d3-87deb41c9b29',
              buildHookId: '6087124dad07d510e6f6825f',
              name: 'laterredumillieu-staging',
              url: 'https://staging.laterredumilieu.com'
            }
          ]
        }
      },
      {
        name: 'document-list', 
        options: {
          title: "Derniers POI mit à jour", 
          order: '_updatedAt desc', 
          types: ['POI'],
          createButtonText: 'Ajouter POI'
        },
        layout: {
            width: 'small',
        }
      },
      {
        name: 'document-list', 
        options: {
          title: 'Derniers évènements mit à jour', 
          order: '_updatedAt desc', 
          types: ['Events'],
          createButtonText: 'Ajouter évènement'
        },
        layout: {
            width: 'small',
        }
      }
    ]
  }