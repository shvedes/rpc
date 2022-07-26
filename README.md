# Discord Rich Presence written on JavaScript

## Installation

### Windows

1. Download and install nodejs from [official page](https://nodejs.org/en/download/)
2. Create a directory and open it in VS Code
3. Open a terminal and paste: 
```
npm init -y; npm install discord-rpc
```
4. Download **index.js** from this repository and copy it to your directory
5. Open **package.json** and in 7 line replace "**test**" to "**start**"
6. Create a .bat file with any name and paste:
```
node index.js
```
### Linux

1. Download **nodejs** and **npm** using your package manager
2. Create a directory and open it in terminal/VS Code
3. Paste in terminal: 
```
npm init -y; npm install discord-rpc
```
4. Download **index.js** from this repository and copy it to your directory
5. Open **package.json** and in 7 line replace "**test**" to "**start**"

## Usage

### Windows

Just open your **.bat** file

### Linux 

In terminal: 
```
node /path/to/index.js
```

Also you can add alias to your **.bashrc/.zshrc** file:

```
alias rpc="node /path/to/index.js"
```
In that case the command would look like this:
```
rpc
```
