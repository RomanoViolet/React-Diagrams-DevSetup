# Pull base image.
FROM ubuntu:20.04

# On single RUN command: https://coderwall.com/p/4g8znw/things-i-learned-while-writing-a-dockerfile
LABEL ReactDiagrams.version="0.2"
LABEL vendor="Devendra Rai, rai.devendra@yahoo.co.uk"
LABEL ReactDiagrams.release-date="2020-10-10"
LABEL ReactDiagrams.version.is-production="No"

ARG USERNAME=dockeruser
ARG USER_UID=1000
ARG USER_GID=$USER_UID

# Tell debian that we are running non-interactively
ENV DEBIAN_FRONTEND=noninteractive

# Install Core components.
RUN \
  sed -i 's/# \(.*multiverse$\)/\1/g' /etc/apt/sources.list && \
  apt-get update && \
  apt-get -qqy upgrade && \
  apt-get -y install --no-install-recommends apt-utils dialog 2>&1 && \
  apt-get install -y build-essential && \
  apt-get install -y software-properties-common && \
  apt-get install -y sudo && \
  apt-get install -qqy libz-dev && \
  apt-get install -qqy curl unzip && \
  apt-get install -qqy gnupg && \
  apt-get install -qqy net-tools && \
  apt-get install -qqy wget && \
  apt-get install -qqy bash && \
  apt-get install -qqy git && \
  apt-get install -qqy npm && \
  apt-get install -qqy nodejs && \
  #apt-get install -qqy yarn && \
  apt-get install -qqy curl && \
  apt-get install -qqy apt-transport-https && \
  apt-get install -qqy locales && \
  apt-get update && \
  # Deno
  curl -fsSL https://deno.land/x/install/install.sh | DENO_INSTALL=/usr/bin/denoFolder sh && \
  mv /usr/bin/denoFolder/bin/deno /usr/bin/deno && \
  rm -rf /usr/bin/denoFolder && \
  chmod +x /usr/bin/deno && \
  #
  #
  #curl -sL https://deb.nodesource.com/setup_15.x  | bash - && \
  #apt-get -qqy install nodejs && \
  #
  # NPM Packages
  #
  #apt remove -qqy cmdtest && \
  #apt remove -qqy yarn && \
  apt remove -qqy unzip && \
  curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add - && \
  echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list && \
  apt-get update && \
  apt-get install -qqy yarn && \
  npm install -g eslint -g \
  webpack-dev-server \
  webpack-cli \
  webpack \
  typescript \
  types-installer \
  prettier && \
  apt-get purge -y --auto-remove build-essential && \
  apt-get purge -y --auto-remove software-properties-common && \
  apt-get purge -y --auto-remove curl wget && \
  apt-get purge -y --auto-remove xz-utils && \
  apt-get purge -y --auto-remove python3-pip && \
  apt-get purge -y --auto-remove apt-transport-https && \
  apt-get autoremove -y && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/* && \
  #
  #update-alternatives --install /usr/bin/deno deno /usr/bin/deno/bin/deno 100 && \
  #update-alternatives --install /usr/bin/clang++ clang++ /usr/bin/clang++-8 100 && \
  #update-alternatives --install /usr/bin/clang-format clang-format /usr/bin/clang-format-8 100 && \
  #update-alternatives --install /usr/bin/clangd clangd /usr/bin/clangd-8 100 && \
  #
  # Setup locales
  sed -i -e 's/# en_US.UTF-8 UTF-8/en_US.UTF-8 UTF-8/' /etc/locale.gen && \
  dpkg-reconfigure --frontend=noninteractive locales && \
  update-locale LANG=en_US.UTF-8 && \
  #
  # Add non-admin user
  groupadd --gid $USER_GID $USERNAME && \
  useradd -s /bin/bash --uid $USER_UID --gid $USER_GID -m $USERNAME && \
  echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME && \
  chmod 0440 /etc/sudoers.d/$USERNAME && \
  #
  # Add files for convenience.
  #ADD root/.bashrc /home/dockeruser/.bashrc
  #ADD root/.scripts /home/dockeruser/.scripts
  #
  #
  # Make sure that all file in /home/dockeruser are owned by dockeruser
  chown -R dockeruser /home/dockeruser
#ENV HOME /home/dockeruser && \
#

# Add default home for the non-admin user
WORKDIR /home/dockeruser
ADD --chown=dockeruser Configurations/.gitconfig /home/dockeruser/.gitconfig
ADD --chown=dockeruser Configurations/.bashrc /home/dockeruser/.bashrc
ADD --chown=dockeruser Configurations/git-completion.sh /home/dockeruser/git-completion.sh
ADD --chown=dockeruser Configurations/git-prompt.sh /home/dockeruser/git-prompt.sh

#ADD --chown=dockeruser VSCodeExtensions/extensions /home/dockeruser/.vscode-server/extensions

ENV LANG en_US.UTF-8
ENV LANG C.UTF-8
ENV LC_ALL C.UTF-8

# Do the following as an ordinary user
USER dockeruser

RUN \
  chmod +x /home/dockeruser/.bashrc && \
  chmod +x /home/dockeruser/git-completion.sh && \
  chmod +x /home/dockeruser/git-prompt.sh
#echo 'export PATH=/clang_8/bin:$PATH' >> ~/.bashrc && \
#echo 'export LD_LIBRARY_PATH=/clang_8/lib:/usr/local/lib:$LD_LIBRARY_PATH' >> ~/.bashrc


# Define default command.
CMD ["/bin/bash"]
