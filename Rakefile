desc "information"
task :info do
  puts "Hello, Rake!"
end

desc "Build the project"
task :build do
  puts "Building the project..."
  # tambahkan perintah build di sini
end

desc "Clean build artifacts"
task :clean do
  puts "Cleaning up..."
  # hapus file atau folder build di sini
end

# Task dengan dependency
desc "Run tests"
task test: :build do
  puts "Running tests..."
  # perintah untuk testing
end

# Default task saat hanya 'rake' dijalankan tanpa argumen
task default: :info