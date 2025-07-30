# CalculatorAPPJS

#!/bin/bash
apt-get update -y
apt-get install -y nginx git

# Clone your GitHub repo
cd /var/www/html
rm index.nginx-debian.html
git clone https://github.com/kesaraju7/CalculatorAPPJS.git site

# Move contents to web root
cp -r site/* .
rm -rf site

# Restart Nginx
systemctl restart nginx
