# Microservice instructions
5/8/2023

Fallow the fallowing steps to implement and start to get microservice working

## **Downloads**

Fallowing is the code to download express the service that the microservice usees to run.

```
npm install express
```


## **Include new files**

This programs microservice is reading form a json file named prompts.json please make sure this exists in same directory as microservice

format for prompts.json

variables in each block of the json file.

1. id
-   Type: (int)
-   Use: Holds the unique id for each prompt
    
2. title
-   Type: (string)
-   Use: Holds the title for the prompt
    
3. prompt
-   Type: (string)
-   Use: Holds the prompt

Example of json file
```
[
    {
        "id": 1,
        "title": "Title example 1",
        "prompt": "This is a test prompt for prompt 1"
    },
    {
        "id": 2,
        "title": "Title example 2",
        "prompt": "I am in a class called cs361 and my name is"
    }
]
```

## **How to Request Data**

Micro service runs on port 5213, and bellow is an example call using axios. {promptID} is the "id" value in the json file

- Example call using axios
```
const response = await axios.get(`http://localhost:5213/prompts/${promptID}`); 
```

- Example call from microservice (the webhost of the microservice)
```
http://localhost:5213/prompts/${promptID}
```

```
const axios = require('axios');


async function getPromptId(promptID) {
    try {
        const response = await axios.get(`http://localhost:5213/prompts/${promptID}`); //reads into response
        const prompt = response.data; //get prompt
        console.log('Prompt:', prompt); //get log the prompt 
    }
    catch (error) {
        console.error('Error', error.message);
    }
}
getPromptId(1); // calling 1
getPromptId(2);
getPromptId(3);
```

## **How to Recive Data**
the microserve returns a json below is an example return form microservice

```
{
"title": "Title example 1",
"prompt": "I am in a class called cs361 and my name is"
}
```

and how to get this data form the microserice would be to use something like

```
const prompt = response.data; 
```

bellow the request of data

![image](https://user-images.githubusercontent.com/115040382/236994947-3cdc8521-6ac3-4e45-a861-7826c7edf2b6.png)
