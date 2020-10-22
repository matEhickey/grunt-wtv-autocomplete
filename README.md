# grunt-wtv-autocomplete
autocomplete script to provide profiles autocompletion.  

## Install
- Download this folder somewhere in your disk  
- Install the dependencies:
~~~sh
npm install --production
~~~
- Add and fill this line to your .\_shrc:  
```sh
complete -C <folder_path>/bin.js grunt
```  
- source your .\_shrc (or close and restart your terminal) to get the autocomplete working  

## Run tests
~~~sh
npm install
npm run test
~~~
