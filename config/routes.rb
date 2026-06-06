# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users
  root 'items#index'
  resources :items, only: %i[index new create show edit update destroy] do
    resources :orders, only: %i[index create]
  end
  get 'up' => 'rails/health#show', as: :rails_health_check
end
