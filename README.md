#storyspine

A basic framework to build one-page standalone "Snow Fall"-like stories in a news-editor friendly way, inspired by Wall Street Journal's approach to building "The Lobotomy Files" as described in http://source.opennews.org/en-US/articles/building-lobotomy-files/

The main goal of the project is to create a modern build framework that can do the following:

- Concatenate and minify LESS files and Bootstrap
- Concatenate and minify javascript
- Use simple markdown files to host text content (news-writer/news-editor friendly)
- Create an optimized static site as the final result

The Grunt buildsystem is used to build the project into the final static site. The command "grunt watch" allows the project to auto-update itself if any of the source LESS, javascript, or HTML files change, for ease of development.

This is currently experimental and in a very early stage of development.

##How to use

First, clone the repository. Make sure you have Node.js and Grunt installed globally.

In the terminal, go to the project directory, type the following:

    npm install & bower install

You're ready to go. Modify the files in the 'src' directory as you please. You can build the project with the command

    grunt build

which will output the project in the 'dist' directory.

If you want to make it so that the 'dist' directory updates automatically on changes to the source files, use

    grunt watch

If you need to add or remove javascript or less files from the build, or want to change the concatenation order, edit the files 'gruntconfig/jsorder' and 'gruntconfig/lessorder'

Use bower's usual update commands to easily update to new versions of Bootstrap, etc.
