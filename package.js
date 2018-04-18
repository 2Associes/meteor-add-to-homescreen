Package.describe({
  name: '2associes:a2h',
  version: '1.0.1',
  summary: 'A basic iOS devices "Add to Home Screen" solution for Meteor PWA projects.',
  git: 'https://github.com/2Associes/meteor-add-to-homescreen',
  documentation: 'README.md'
})

Package.onUse((api) => {
  api.versionsFrom('1.6.1')

  api.use([
    'ecmascript',
    'templating@1.0.9',
    'jquery',
    'fourseven:scss@4.5.4'
  ], 'client')

  api.addFiles([
    'templates/a2h.html',
    'templates/a2h.scss',
    'templates/a2h.js',
    'templates/body.html',
    'a2h.js'
  ], 'client')

  api.export('AddToHomeScreen')
})

Package.onTest((api) => {
  api.use([
    'ecmascript',
    'tinytest',
    '2associes:a2h'
  ])

  api.mainModule('a2h-tests.js')
})
