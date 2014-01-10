storyspine
==========

A basic framework to build one-page standalone "Snow Fall"-like stories in a news-editor friendly way, inspired by Wall Street Journal's approach to building "The Lobotomy Files" as described in http://source.opennews.org/en-US/articles/building-lobotomy-files/

The main goal of the project is to create a modern build framework that can do the following:

- Concatenate and minify LESS files and Bootstrap
- Concatenate and minify javascript
- Use simple markdown files to host text content (news-writer/news-editor friendly)
- Create an optimized static site as the final result

The Grunt buildsystem is used to build the project into the final static site. The command "grunt watch" allows the project to auto-update itself if any of the source LESS, javascript, or HTML files change, for ease of development.

This is currently experimental and in a very early stage of development.
