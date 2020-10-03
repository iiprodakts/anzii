
# Introduction



Anzii is a backend javascript modular and event-driven framework that is simple, quick to learn and build with.

It was designed with different kinds of users in mind,so it doesn't matter if you are a designer, developer,or anything in between. If you have a basic understanding of Javascript,you can have your application working in under 2 minutes, all with a single line of code. 


# Installation 

  ```
  npm install --save anzii 
  
  ```

# Usage 


### Without plugins


#### Single line 

```js
    require('anzii')() 
```

#### Multilines 

```
    const anzii = require('anzii') 
    anzii() 

```

### With Plugins 


#### Single line  

```js 
    require('anzii')([require("./plugins")])
``` 

#### Multilines 

    ```js

        const anzii = require('anzii') 
        const plugins = require('./plugins')
        anzii([plugins]) 


    ```


#Quick Guide 


## Configurations 



Anzii will look for a `.config.json` configuration in the root of your project. This configuration file is used to configure your preferences for things such *middlewares,routes,static and view directories*,etc 

Please note: You can use a directory of your choice to hold your configurtion files, but those files should be imported to this configuration file **.config.json** as a final step.


````js

import routes from './includes/routes'
import * as middlewares from './includes/globals' 


export default  {

    middleware: {

        publik:{

            addMiddleware: middlewares.ppublic
        },
        privet: {

            addMiddleware: middlewares.pprivate

        },
        all: {

            addMiddleware: middlewares.all
        }
        
        
    }, // Your middlewares configurations
    view: true, // Enable rendering web pages
    router: routes, // Your api routes
    logger: {level: 'info'},// Enable info logging
    cluster:{workers: 3,spawn: true,} ,// Enabble cluster
    

} 

```

## Routing Examples 


In Anzii, every route is an object that contains a couple of properties that determine charateristics of that route: 

```
   {
        path: '/hello', // Route path with request handler(plugin) name(hello)
        method: 'GET', // Use get method for this route
        type: 'public', // Make this a publicly available path
        
    },   

``` 
    
   
Every route object represents a handler(plugin) whose task is to handle a request in a request/response lifecycle, **more on this shortly**. 


## Anzii plugins 


### Example Plugin Hello
     



class Hello{
	
	
	constructor(pao){
		
		this.pao = pao // Every plugin is passed this object
	}
	
	init(){
  
        this.listens({
            
        'handle-hello-task': this.handleHelloTask.bind(this),
        
        })
	
	}



handleHelloTask(data){

	const self = this  
	self.callback = data.callback 
	let {name,surname} = data 
	let message = `Hello ${name} ${surname}, I'm happy to meet you.'`
	
	return self.callback(null,{message: message})
} 

	
	

	
}
 

export default Hello 



And that\'s it! The thing is done!
Now when you navigate to ***http://localhost:3000/hello***
you should see the text > Hello name surname, I'm happy to meet you.
on your browser.


## How does it work? 



# Documentation 


Docs coming soon! 

we are currently working on our documentation with thw help from our first ever collaborater @ntsakosuprise 

# Questions

    For questions and support please use the official forum or community chat. The issue list of this repo is exclusively for bug reports and feature requests.

# Issues

Please make sure to read the Issue Reporting Checklist before opening an issue. Issues not conforming to the guidelines may be closed immediately.

# Changelog

Detailed changes for each release are documented in the relea se notes.


# Stay In Touch

[Twitter @anziijs](https://twitter.com/anziijs).




# Contribution

Please make sure to read the Contributing Guide before making a pull request. If you have a anzii-related plugins, add it with a pull request.
 

# Licence 

[MIT](https://.github.com/).


copyright (c) 2019-present, iiprodatks. Ntsako (Surprise) Mashele ()

A Special thanks to Nicholas C. Zakas for the box presentation that help inspire Akii which has inspired anzii.