export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5d94c4fb4730a19ed797cb03',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-whstp8jn',
                  apiId: '5c75a428-fcbb-4765-b713-cb491f431ddb'
                },
                {
                  buildHookId: '5d94c4fbc4dc6d629ba872ba',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-2wqjspyf',
                  apiId: 'f95c8438-5560-4dac-97ef-fcac3401c08e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ogarciarevett/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-2wqjspyf.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
