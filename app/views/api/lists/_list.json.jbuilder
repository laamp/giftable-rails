# frozen_string_literal: true

json.set! list.id do
  json.extract! list, :id, :title, :event_date, :owner_id
end
