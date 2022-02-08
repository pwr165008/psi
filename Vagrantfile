# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
    config.vm.box = "gusztavvargadr/docker-community-ubuntu-server"

  config.vm.provider "virtualbox" do |vb|
    vb.memory = "2048"
    vb.cpus = "1"
  end

  config.vm.define "docker" do |docker|
#     docker.vm.network "forwarded_port", guest: 5432, host: 5432
    docker.vm.network "forwarded_port", guest: 8080, host: 8080
#     docker.vm.provision "shell", path: "bootstrap.sh"
  end
end
