(function(global) {
  var packages = {
    app: {
      main: '../main.js',
      defaultExtension: 'js',
      meta: {
          './*.js': {
          loader: 'systemjs-angular-loader.js'
          }
        }
    },
    rxjs: {
       defaultExtension: 'js'
    },
    'socket.io-client': {defaultExtension: 'js'}
  };

  var map = {
    '@angular': 'lib/@angular',
    'rxjs': 'lib/rxjs',
    'socket.io-client': 'lib/socket.io-client/dist/socket.io.js'
  };
// ---- above app's "main:'../main.js'" and "loader: 'systemjs-angular-loader.js'"
// ---- and "'socket.io-client': {defaultExtension: 'js'}" and 
// ---- and "'socket.io-client': 'lib/socket.io-client/dist/socket.io.js'"
// ---- is correct for no testing, 
// ---- but in test enviroment karma and phontanmjs 'socket.io.js' exporsed 404 error
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'router',
    'platform-browser',
    'platform-browser-dynamic'
  ];

  ngPackageNames.forEach(function(pkgName) {	
    packages['@angular/' + pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
    map['@angular/' + pkgName + '/testing'] = 'lib/@angular/' + pkgName + '/bundles/' + pkgName + '-testing.umd.js';
  });

  System.config({
    defaultJSExtensions: true,
    transpiler: null,
    packages: packages,
    map: map
  });
})(this);

/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
// (function (global) {
//   System.config({
//     paths: {
//       // paths serve as alias
//       'npm:': 'node_modules/'
//     },
//     // map tells the System loader where to look for things
//     map: {
//       // our app is within the app folder
//       'app': 'app',

//       // angular bundles
//       '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
//       '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
//       '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
//       '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
//       '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
//       '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
//       '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
//       '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

//       // other libraries
//       'rxjs':                      'npm:rxjs',
//       'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js'
//     },
//     // packages tells the System loader how to load when no filename and/or no extension
//     packages: {
//       app: {
//         defaultExtension: 'js',
//         meta: {
//           './*.js': {
//             loader: 'systemjs-angular-loader.js'
//           }
//         }
//       },
//       rxjs: {
//         defaultExtension: 'js'
//       }
//     }
//   });
// })(this);