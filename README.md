# Microservice instructions
5/8/2023

Fallow the fallowing steps to implement and start to get microservice working

## **Downloads**

Fallowing is the code to download express the service that the microservice usees to run.

```
npm install express
```


## **Include new files**

this programs microservice is reading form a json file named prompts.json please make sure this exists in same directory as microservice

format for prompts.json

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

-For this we will be using http gets bellow is an example on how to request a data

Route '/prompts/promptID'

```
const response = await axios.get(`http://localhost:5213/prompts/${promptID}`); //reads into response
```

Breakdonw of the request

const reponse - holds the reponse in a const this is reutnred in a json format

await axios.get() - gets the data from the url () brakets

```
http://localhost:5213/prompts/${promptID}
```

- This is run a local host the number 5213 is only tempary and will be changed to your port of choice
- ${promptID} means that you will define a value promptID and set it to the desired id and it will pass that id to the reqested id this means that if you for example did promptID = 1 you would look like http://localhost:5213/prompts/1

because of this I have coded a function that you can use to get that data it only prints to consle for now but it maybe helpfull

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
