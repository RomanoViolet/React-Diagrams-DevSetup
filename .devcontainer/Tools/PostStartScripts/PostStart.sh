#!/usr/bin/env bash

# Setup keys
sudo cp /host/.gitconfig $HOME/.gitconfig
sudo cp -rv /host/.ssh $HOME/
sudo chown -R $UID:$UID $HOME/.ssh
sudo chown -R $UID:$UID $HOME/.gitconfig
