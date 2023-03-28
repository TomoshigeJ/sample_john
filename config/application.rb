require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module SampleJohn
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.2
    # アプリケーションでサポートする言語の一覧を設定
    config.i18n.available_locales = %i[ja en]
    # デフォルトのlocaleを:ja(日本語にする)
    config.i18n.default_locale = :ja
    # ロケールファイル読み込みのpathを通す
    config.i18n.load_path += Dir[Rails.root.join('config/locales/**/*.{rb,yml}').to_s]
    # 基準時刻を日本時間に設定
    config.time_zone = 'Tokyo'
    config.active_record.default_timezone = :local
  end
end
