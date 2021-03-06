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
                  buildHookId: '604347a373cb39d9cb4e9125',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-6toa4vdf',
                  apiId: 'b18baf31-9216-4657-830a-eddd4e1c3135'
                },
                {
                  buildHookId: '604347a493462cd55567f6c3',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-o1psudnx',
                  apiId: '95f82916-fc86-4f94-9c39-47aed8f88665'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mvanherwijnen/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-o1psudnx.netlify.app', category: 'apps'}
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
