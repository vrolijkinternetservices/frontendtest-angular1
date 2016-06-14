fuser -k -n tcp 1338
fuser -k -n tcp 4444
gnome-terminal -e 'grunt connect'
gnome-terminal -e 'webdriver-manager start'
gnome-terminal -e 'protractor conf.js'
