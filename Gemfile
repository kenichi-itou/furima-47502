# frozen_string_literal: true

source 'https://rubygems.org'
ruby '3.2.0'
gem 'active_hash'
gem 'bootsnap', require: false
gem 'devise'
gem 'gon'
gem 'importmap-rails'
gem 'jbuilder'
gem 'payjp'
gem 'puma', '>= 5.0'
gem 'rails', '~> 7.1.0'
gem 'sprockets-rails'
gem 'stimulus-rails'
gem 'turbo-rails'
gem 'tzinfo-data', platforms: %i[windows jruby]
group :development, :test do
  gem 'database_cleaner-active_record'
  gem 'debug', platforms: %i[mri windows]
  gem 'dotenv-rails'
  gem 'factory_bot_rails'
  gem 'mysql2', '~> 0.5'
  gem 'rspec-rails'
end
group :production do
  gem 'pg'
end
group :development do
  gem 'rubocop', '1.71.2', require: false
  gem 'web-console'
end
group :test do
  gem 'capybara'
  gem 'minitest', '~> 5.0'
  gem 'selenium-webdriver'
end
