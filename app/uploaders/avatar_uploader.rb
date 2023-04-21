class AvatarUploader < CarrierWave::Uploader::Base
  # 保存形式の指定
  storage :file
  
  # アップロードしたファイルの保存先を指定
  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  # デフォルトで表示する画像を指定(app/assets/images/に画像は保存しておく)
  def default_url
    'sample.jpg'
  end

  # アップロードを許可するファイルの種類を指定
  def extension_allowlist
    %w(jpg jpeg png gif)
  end
end
