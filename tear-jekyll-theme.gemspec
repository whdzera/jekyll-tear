Gem::Specification.new do |spec|
  spec.name          = "tear-jekyll-theme"
  spec.version       = "0.1"
  spec.authors       = ["Rokhimin"]
  spec.email         = ["Rokhim.whd@gmail.com"]

  spec.summary       = "A simple Jekyll theme"
  spec.homepage      = "https://github.com/yourname/my-jekyll-theme"
  spec.license       = "MIT"

  spec.files         = Dir["{_layouts,_includes,_sass,assets}/**/*", "LICENSE", "README.md"]
  spec.require_paths = ["lib"]

  spec.add_runtime_dependency "jekyll", ">= 4.0", "< 5.0"
end
