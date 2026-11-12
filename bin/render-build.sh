#!/usr/bin/env bash
# exit on error
set -o errexit

# 1. Compile the custom Webpack bundle
npm run build

# 2. Clean and precompile the final asset pipeline mapping for Rails 8
bundle exec rails assets:clobber
bundle exec rails assets:precompile
bundle exec rails assets:clean

# 3. Purge, migrate, and seed the database
bundle exec rails db:purge
bundle exec rails db:migrate
bundle exec rails db:seed