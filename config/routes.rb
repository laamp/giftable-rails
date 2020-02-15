# frozen_string_literal: true

# == Route Map
#
#                    Prefix Verb   URI Pattern                                            Controller#Action
#                      root GET    /                                                      static_pages#root
#               api_session DELETE /api/session(.:format)                                 api/sessions#destroy {:format=>:json}
#                           POST   /api/session(.:format)                                 api/sessions#create {:format=>:json}
#       api_user_list_gifts POST   /api/users/:user_id/lists/:list_id/gifts(.:format)     api/gifts#create {:format=>:json}
#        api_user_list_gift PATCH  /api/users/:user_id/lists/:list_id/gifts/:id(.:format) api/gifts#update {:format=>:json}
#                           PUT    /api/users/:user_id/lists/:list_id/gifts/:id(.:format) api/gifts#update {:format=>:json}
#                           DELETE /api/users/:user_id/lists/:list_id/gifts/:id(.:format) api/gifts#destroy {:format=>:json}
#            api_user_lists GET    /api/users/:user_id/lists(.:format)                    api/lists#index {:format=>:json}
#                           POST   /api/users/:user_id/lists(.:format)                    api/lists#create {:format=>:json}
#             api_user_list GET    /api/users/:user_id/lists/:id(.:format)                api/lists#show {:format=>:json}
#                           PATCH  /api/users/:user_id/lists/:id(.:format)                api/lists#update {:format=>:json}
#                           PUT    /api/users/:user_id/lists/:id(.:format)                api/lists#update {:format=>:json}
#                           DELETE /api/users/:user_id/lists/:id(.:format)                api/lists#destroy {:format=>:json}
#                 api_users POST   /api/users(.:format)                                   api/users#create {:format=>:json}
#                  api_user GET    /api/users/:id(.:format)                               api/users#show {:format=>:json}
#                           PATCH  /api/users/:id(.:format)                               api/users#update {:format=>:json}
#                           PUT    /api/users/:id(.:format)                               api/users#update {:format=>:json}
#        api_users_to_lists POST   /api/users_to_lists(.:format)                          api/users_to_lists#create {:format=>:json}

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
