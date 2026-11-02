#!/usr/bin/env bash
# exit on error
set -o errexit

# 1. Install Ruby and JavaScript dependencies
bundle install
npm install

# 2. Compile the custom Webpack bundle
npm run build

# 3. Clean and precompile the final asset pipeline mapping for Rails 8
bundle exec rails assets:clobber
bundle exec rails assets:precompile
bundle exec rails assets:clean

# 4. Run any database migrations safely
bundle exec rails db:migrate