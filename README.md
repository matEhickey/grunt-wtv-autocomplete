# grunt-wtv-autocomplete
autocomplete script to provide profiles autocompletion.  

Context:  
> [Wiztivi](https://www.wiztivi.com/) use a wrapper around grunt to launch apps profiles in a different way:  
They use "grunt task1 task2 .. -p <profile-name>" instead of "grunt profile:<profile-name>"  

Here it is the complete script to enable autocompletion for these profiles (will parse app.config.json to serach all profile names)  

Tasks autocompletion only support 'serve' and 'package' as all the other tasks are used internally and so, should not appear in the completion command.  

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

## How to use:
On your local wtv app folder (containing the app.config.json), begin to type your grunt command:  
```sh
grunt <tab><tab>

# will echo
# package serve

grunt ser<tab>
# will transform your prompt to "grunt serve"

grunt serve -p <tab><tab>
# will echo (all the profiles from your app.config.json)
# default profile1 profile2 profile3

grunt serve -p def<tab>
# will transform your prompt to "grunt serve -p default" if there is only the 'default' profile starting with 'def'
```

## Run tests
~~~sh
npm install
npm run test
~~~
