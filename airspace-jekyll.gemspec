# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "airspace-jekyll"
  spec.version       = "0.1.0"
  spec.authors       = ["LuminousRubyist"]
  spec.email         = ["LuminousRubyist@users.noreply.github.com"]

  spec.summary       = %q{A port of ThemeFisher's Airspace theme. https://github.com/themefisher/airspace-free-html5-agency-template}
  spec.homepage      = "http://example.com"
  spec.license       = "MIT"

  #spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(_layouts|_includes|_sass|LICENSE|README)/i}) }
  spec.files           = Dir['LICENSE.md', 'README.md', 'lib//*', 'bin//*']
  spec.add_development_dependency "jekyll", "~> 4.2.2"
  spec.add_development_dependency "bundler", "~> 2.3.9"
  spec.add_development_dependency "rake", "~> 13.0.6"
end
