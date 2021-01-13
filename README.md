# [React Diagrams](<(https://github.com/projectstorm/react-diagrams)>) Development Environment

This project provides necesssary development tools required to work with [React Diagrams](https://github.com/projectstorm/react-diagrams). The example included herein is from the [demo project](https://github.com/projectstorm/react-diagrams/tree/master/packages/diagrams-demo-project).

## Pre-Requisites

1. [Visual Studio Code](https://code.visualstudio.com)
2. Visual Studio Code plugin [Remote Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
3. Docker with access to internet.
4. [Firefox Browser](https://www.mozilla.org/en-US/firefox/new/) installed on the host.

## Tools on Host Machine

|             Tool | Version Used                                  |
| ---------------: | :-------------------------------------------- |
| Operating System | Linux Mint 20.1 (Based on Ubuntu 20.04/focal) |
|           Docker | 20.10.2, build 2291f61                        |

## How To Use

1. Ensure pre-requisites are met,
2. Clone this repository,
3. Open Visual Studio Code, Run the Remote-Containers: `Open Folder in Container...` command and select the folder where (the master branch of) this repository is cloned.
   1. See [this link](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) for more help.
4. VSCode will attempt to build the container based on the provided [Dockerfile](./.devcontainer/Dockerfile) automatically.
5. VSCode will then proceed to install all dependencies listed in the `package.json` file placed at the root of the project.
6. On success, `Ctrl+Shift+B` will bring a menu of possible build choices that may be selected from.

## Details of Development Environment

Included in the development environment are:

1. Linux Based Docker environment
2. Packages as listed in [`package.json`](./package.json)
3. VSCode based [build shortcuts](./.vscode/tasks.json), invoked using `Ctrl+Shift+B` and then making appropriate choice.
4. Preconfigured [project settings](./.vscode/settings.json)
5. Preconfigured [debug settings](./.vscode/launch.json) which requires [firefox browser](https://www.mozilla.org/en-US/firefox/new/) available on the host machine.

The user can change the development configuration to switch from Firefox browser to Chrome.
