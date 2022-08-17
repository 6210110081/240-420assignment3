exports.createPages = async ({ graphql, actions }) => {
  const team = await graphql(`
    query {
      directus {
        Team {
          id
        }
      }
    }
  `).then(res => console.log(res))

  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}
