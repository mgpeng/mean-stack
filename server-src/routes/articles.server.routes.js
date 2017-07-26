const users=require('../../server-src/controllers/users.server.controller');
const articles=require('../../server-src/controllers/articles.server.controller');

module.exports=(app)=>{
    app.route('/api/articles')
       .get(articles.list)
       .post(users.requireLogin,articles.create);
    
    app.route('/api/articles/:articleId')
       .get(articles.read)
       .put(users.requireLogin,articles.hasAuthorization,articles.update)
       .delete(users.requireLogin,articles.hasAuthorization,articles.delete);
    
    app.param('articleId',articles.articleByID);
};