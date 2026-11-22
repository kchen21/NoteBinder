Paperclip::Attachment.default_options.merge!(
  storage: :s3,
  s3_region: ENV["s3_region"],
  s3_protocol: :https,
  s3_host_name: "s3.#{ENV['s3_region']}.amazonaws.com",
  s3_permissions: nil,
  s3_credentials: {
    bucket: ENV["s3_bucket"],
    access_key_id: ENV["s3_access_key_id"],
    secret_access_key: ENV["s3_secret_access_key"]
  }
)