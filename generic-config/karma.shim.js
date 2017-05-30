__karma__.loaded = function () { };

System.import('/base/public/systemjs.config.js').then(loadTests);

function loadTests() {
  Promise.all([
    System.import('app/bootstrap.spec'),
    System.import('app/services/articles.service.spec'),
    System.import('app/articles/list/list.component.spec'),
    System.import('app/app-routing.spec'),
    System.import('app/directive-ngif.spec'),
    System.import('app/pipe-lowercasepipe.spec')
  ]).then(__karma__.start, __karma__.error);
}