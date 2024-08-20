exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  createPage({
    path: "/",
    component: require.resolve("./src/pages/index.js"),
  });

  createPage({
    path: "/textTemplate",
    component: require.resolve("./src/textTemplate/textTemplate.js"),
  });
};
