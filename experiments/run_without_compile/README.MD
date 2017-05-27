## Using protractorjs with .ts config file and .ts spec files

Tried with ts-node - https://github.com/TypeStrong/ts-node


Idea is to write script that will register ts-node on-fly compiler BEFORE executing `protractor/bin/protractor` file  - basically this is javascript file that just requires `protractor/built/cli.js` - all args parsing done there

To do this i trying to use own protractor starter script - `protractor` file in this folder.
It loads ts-node, and then requires `protractor/built/cli.js`
