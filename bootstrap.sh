#!/usr/bin/env bash

apt-get update
apt-get install -y apache
apt-get install composer
rm -rf /var/www
ln -fs /vagrant /var/www
