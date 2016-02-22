var sass = require("node-sass");
var eyeglass = require("eyeglass");
var fs = require("fs");

var options = eyeglass({
    file: 'sass/styles.scss',
    outFile: 'css/styles.css',
    eyeglass: {
      engines: {
        sass: require('node-sass'),
        buildDir: 'css/styles.css'
      }
    }
  });

sass.render(options, function(error, result) {
	if(!error){
      fs.writeFile('css/styles.css', result.css, function(err){
        if(!err){
          console.log('Stylesheet successfully created')
        } else { console.log(err)}
      });
    } else { console.log(error)}
});

