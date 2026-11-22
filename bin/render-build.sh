#!/usr/bin/env bash
# exit on error
set -o errexit

# 0. Install Ruby gems and Node packages
bundle install
npm install --force

# 1. Compile the custom Webpack bundle
npm run build

# 2. Clean and precompile the final asset pipeline mapping for Rails 8
bundle exec rails assets:clobber
bundle exec rails assets:precompile
bundle exec rails assets:clean

# 3. Recreate all tables and seed
DISABLE_DATABASE_ENVIRONMENT_CHECK=1 bundle exec rails db:schema:load db:seed