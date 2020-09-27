export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'fqcolour-sanity-nuxt-events-studio',
                  apiId: 'd863574b-8e30-4410-adb1-5e1e859f35b7'
                },
                {
                  buildHookId: '5f70b52eb444f5c34cbe167e',
                  title: 'Events Website',
                  name: 'fqcolour-sanity-nuxt-events',
                  apiId: 'eae7a15d-52f1-4670-901a-4dfa4f55aeb2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/francisqureshi/fqcolour-sanity-nuxt-events',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://fqcolour-sanity-nuxt-events.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
