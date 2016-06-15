Example Brand.ai Grunt integration
===
To use with your style guide, just change the download URLs in the Gruntfile to your style guide URLs.

Please note that variable names in style.scss are consistent with our example style guide and might need to be adjusted when generating your css files.

#### General 
1. run `npm install` to load project dependencies.

#### Styles Integration
1. Run `grunt styles` to fetch CSS styles from Brand.ai [sample project](https://brand.ai/acme-demo-new/style).
2. Run `grunt sass` to compile sass into css. 

#### Icons Integration
1. Run `grunt unzip-icons` task to download and unzip all your icons to destination directory.
2. Use your tool of choice to generate icons fonts, icon sprites or any other desired option. You can find more suggestions in this 
[ link ] (https://css-tricks.com/mega-list-svg-information/#article-header-id-1).

#### Images Integration
1. Run `grunt unzip-images` task to download and unzip all your images to destination directory.
2. You can then integrate them upon you needs in your build process.
