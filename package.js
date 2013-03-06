Package.describe({
  summary: "pubreader - A reader designed to allow increase readability of journal and conference papers produced by NLM"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files([
  	'lib/excanvas.js',
  	'lib/excanvas.min.js',
  	'lib/jquery.colorhelpers.js',
  	'lib/jquery.flot.crosshair.js',
  	'lib/jquery.flot.fillbetween.js',
  	'lib/jquery.flot.image.js',
  	'lib/jquery.flot.js',
  	'lib/jquery.flot.navigate.js',
  	'lib/jquery.flot.pie.js',
  	'lib/jquery.flot.resize.js',
  	'lib/jquery.flot.selection.js',
  	'lib/jquery.flot.stack.js',
  	'lib/jquery.flot.symbol.js',
  	'lib/jquery.flot.threshold.js'
  ], 'client'
  );
});