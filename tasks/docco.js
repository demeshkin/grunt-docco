// grunt-docco
// https://github.com/DavidSouther/grunt-docco
//
// Copyright (c) 2012 David Souther
// Licensed under the MIT license.

"use strict";
var docco = require('docco');

module.exports = function(grunt) {
  grunt.registerMultiTask('docco', 'Docco processor.', function() {
    var task = this;
    
    this.async();

    this.files.forEach(function(file) {
      var options = task.options({ output: file.dest });
      options.args = file.src;
      docco.document(options);
    });
  });
};
