
[![Gem](https://img.shields.io/gem/v/tear-jekyll-theme.svg)](https://rubygems.org/gems/tear-jekyll-theme)
[![Gem](https://img.shields.io/gem/dt/tear-jekyll-theme.svg)](https://rubygems.org/gems/tear-jekyll-theme)

# About
Theme blog for jekyll using Tailwind Css and Stimulus.js.

## Preview
my blog use this theme
https://rokhimin.github.io

## Features
- Stylish UI
- Dark/Light Mode
- Comment (Disqus)
- Easy Changing Name Logo, About, Footer, etc
- Page Projects (Editable)

## Installation Jekyll

    $ gem install jekyll


create first app

    $ jekyll new yournameapp


## Installation Theme 

Installation theme Niri to your jekyll app

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "tear-jekyll-theme"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: tear-jekyll-theme
```

And then execute:

    $ bundle


Run jekyll:

    $ bundle exec jekyll s

## Setup

##### copy to _config.yml

```yaml
title: Tear
email: youremail@gmail.com
description: yourdesc
baseurl: "" 
url: "" 
footer: Example Theme Tear [/code] by whdzera
twitter_username: whdzera
github_username:  rokhimin
logo:whdzera
theme: niri
disqus: ""
```

##### Create file 'projects.markdown' in '/' to use page Projects feature

##### copy to projects.markdown

```
---
layout: projects
permalink: /projects/
---
YOUR PROJECT
```

##### edit about.markdown

```
---
layout: about
permalink: /projects/
---
YOUR ABOUT
```

## Developer 
Run Jekyll
```
rake run
```

Run Tailwindcss mode --watch
```
rake css
```

Run Unit test
```
rake test
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/rokhimin/jekyll-tear. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](https://www.contributor-covenant.org/) code of conduct.

## Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, `_sass` and `assets` tracked with Git will be bundled.
To add a custom directory to your theme-gem, please edit the regexp in `niri.gemspec` accordingly.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
