# yoyo

Using Jekyll to create a static site.

## Running it locally
* Install Ruby and RubyGems
* Verify gcc and make are on your system
    * You can do this by running the commands `gcc -v` and `make -v`
* Use RubyGems to install bundler to take care of dependencies
    * Use the command `gem install bundler`
        * May need to use `sudo`
* Run command `bundle exec jekyll serve` and go to [localhost:4000](http://localhost:4000/)

* For Windows 10 users using Bash on Ubuntu on Windows, autoregeneration may not work, so you may have to run the command `bundle exec jekyll serve --no-watch`
