#!/usr/bin/env bash
BASH_XTRACEFD="4"
PS4='$LINENO: '
set -x 

VENV_PATH=/home/ubuntu/venv
python3 -m venv $VENV_PATH
PATH="$VENV_PATH/bin:$PATH"

export PATH="$VENV_PATH/bin:$PATH"
pip install --upgrade pip && pip install --verbose -r /home/ubuntu/requirements-py3.txt && \
rm -f /home/ubuntu/requirements-py3.txt


# Optional: Make the virtual environment the default for all shells
echo "source $VENV_PATH/bin/activate" >> /home/ubuntu/.bashrc


# Enable Git Credentials Helper
git config --global credential.helper "cache --timeout=36000"

################# Print Path in Color ###################
force_color_prompt=yes
export TERM=xterm-color
export GREP_OPTIONS='--color=auto' GREP_COLOR='1;32'
export CLICOLOR=1
export LSCOLORS=ExFxCxDxBxegedabagacad
export COLOR_NC='\e[0m' # No Color
export COLOR_BLACK='\e[0;30m'
export COLOR_GRAY='\e[1;30m'
export COLOR_RED='\e[0;31m'
export COLOR_LIGHT_RED='\e[1;31m'
export COLOR_GREEN='\e[0;32m'
export COLOR_LIGHT_GREEN='\e[1;32m'
export COLOR_BROWN='\e[0;33m'
export COLOR_YELLOW='\e[1;33m'
export COLOR_BLUE='\e[0;34m'
export COLOR_LIGHT_BLUE='\e[1;34m'
export COLOR_PURPLE='\e[0;35m'
export COLOR_LIGHT_PURPLE='\e[1;35m'
export COLOR_CYAN='\e[0;36m'
export COLOR_LIGHT_CYAN='\e[1;36m'
export COLOR_LIGHT_GRAY='\e[0;37m'
export COLOR_WHITE='\e[1;37m'


# From http://bashrcgenerator.com
echo "PS1='${COLOR_BLUE}\w> ${COLOR_GRAY} \[$(tput sgr0)\]'" >> ~/.bashrc

# Generate default pylint configuration file
pylint --generate-rcfile > /workspaces/PythonSetup/.pylintrc

# Switch off the debug mode
set +x 
