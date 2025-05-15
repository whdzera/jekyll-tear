task :info do
  puts "Hello, Rake!"
end

# run jekyll
task :app do
  sh "bundle exec jekyll s"
end

# run compile tailwindcss mode watch
task :css do
  sh "npx @tailwindcss/cli -i ./assets/css/input.css -o ./assets/css/output.css --watch"
end

# run test rspec
task :test do
  sh "bundle exec rspec"
end

# run commit git
task :c, [:msg] do |t, args|
  commit_msg = args[:msg] || "commit"
  changed = `git status --porcelain`.strip
  if changed.empty?
    puts "No changes to commit."
  else
    sh "git add ."
    sh "git commit -m \"#{commit_msg}\""
    sh "git push -u origin main"
  end
end


task default: :info