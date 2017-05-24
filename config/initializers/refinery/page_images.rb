Refinery::PageImages.configure do |config|
  config.captions = true
  config.enable_for = [
    {:model=>"Refinery::Page", :tab=>"Refinery::Pages::Tab"},
    {:model=>"Refinery::Project", :tab=>"Refinery::Projects::Tab"}
  ]
  config.wysiwyg = true
end
