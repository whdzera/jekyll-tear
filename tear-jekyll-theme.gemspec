Gem::Specification.new do |spec|
  spec.name          = "tear-jekyll-theme"
  spec.version       = "1.0.3"
  spec.authors       = ["Rokhimin"]
  spec.email         = ["Rokhim.whd@gmail.com"]

  spec.summary       = "jekyll Theme Blog using Tailwind Css and Stimulus.js"
  spec.homepage      = "https://github.com/rokhimin/jekyll-tear"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_data|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.required_ruby_version = ">= 2.7"
  spec.add_runtime_dependency "jekyll", ">= 4.0", "< 5.0"
end
