const path = require('path')

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ actions, page }) => {
  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  // if (page.path.match(/^\/app/)) {
  //   page.matchPath = '/app/*'

  //   // Update the page.
  //   createPage(page)
  // }

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/account/)) {
    page.matchPath = '/account/*'

    // Update the page.
    createPage(page)
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      allBook {
        edges {
          node {
            id
          }
        }
      }
      tours: allContentfulTour {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allBook.edges.forEach(book => {
      createPage({
        path: `/book/${book.node.id}`,
        component: path.resolve('src/components/templates/bookTemplate.js'),
        context: { bookId: book.node.id },
      })
    })

    result.data.tours.edges.forEach(tour => {
      createPage({
        path: `/tour/${tour.node.slug}`,
        component: path.resolve('src/components/templates/tourTemplate.js'),
        context: { tourId: tour.node.id },
      })
    })
  })
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  // if (stage === 'build-html') {
  //   actions.setWebpackConfig({
  //     module: {
  //       rules: [
  //         {
  //           test: /auth0-js/,
  //           use: loaders.null(),
  //         },
  //       ],
  //     },
  //   })
  // }

  actions.setWebpackConfig({
    resolve: {
      alias: {
        '../../theme.config$': path.join(
          __dirname,
          'src/semantic/theme.config'
        ),
      },
    },
  })
}

/*
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '../../theme.config$': path.join(__dirname, 'src/semantic/theme.config'),
      },
    },
  });
};
*/
