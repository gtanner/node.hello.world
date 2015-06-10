# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"

$script = <<SCRIPT
#install apt-get packages
apt-get install --no-install-recommends -y build-essential git git-extras python g++ make

#install node
/vagrant/sbin/nave.sh install 0.12.4
/vagrant/sbin/nave.sh usemain 0.12.4

#install npm packages
npm install forever --global
su - vagrant -c 'cd /vagrant/; npm install'
SCRIPT

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "trusty64"
  config.vm.box_url = "http://cloud-images.ubuntu.com/vagrant/trusty/current/trusty-server-cloudimg-amd64-vagrant-disk1.box"
  config.vm.network "forwarded_port", guest: 3000, host: 3000
  config.vm.provision "shell", inline: $script
end
