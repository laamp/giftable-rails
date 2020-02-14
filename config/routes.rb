# frozen_string_literal: true

Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resource :session, only: %i[create destroy]

    resources :users, only: %i[show create update] do
      resources :lists, only: %i[index show create update destroy] do
        resources :gifts, only: %i[create update destroy]
      end
    end

    resources :users_to_lists, only: %i[create]
  end
end
