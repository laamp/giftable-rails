# frozen_string_literal: true

json.set! user.id do
  json.extract! user, :id, :email, :name
end
