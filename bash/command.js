#!/usr/bin/env node
var name = process.argv[2];
// var exec=require("child_process").exec
// var child=exec('echo hello '+ name,function(err, stdout, stderr){
//   console.log('err, stdout, stderr>>>>>',err, stdout, stderr);
// })
// -----------------------------
// var shell=require("shelljs")
// shell.exec("echo helloe "+name)
// -----------------------------
// var argv = require('yargs').option('n', {
//   alias: 'name',
//   describe:'your name',
//   boolean:true,
//   default: 'tom',
// }) .usage('Usage: hello [options]').argv;
var argv=require('yargs').option('f',{
  alias:'name',
  default:'too'
})
.usage('Usage: hello [option]')
.example('hello -n tom','say hello')
.help('h').alias('h','help').epilog('copyright 2015')
.argv;

console.log('argv>>>>>', argv);

console.log('hello', process.argv);
