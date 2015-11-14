# Require any additional Compass plugins here:

# Singularity GS - https://github.com/Team-Sass/Singularity
require "singularitygs"

# Set this to the root of your project when deployed:
css_dir = "public/css"
sass_dir = "src/sass"
# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed
output_style = :compact
# The environment mode. Defaults to :production, can also be :development
environment = :production
# Chrome needs a precision of 7 to round properly
Sass::Script::Number.precision = 7
# To enable relative paths to assets via compass helper functions. Uncomment:
relative_assets = true
# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false