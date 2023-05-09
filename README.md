Microservice instructions
5/8/2023

Downloads
npm install express
npm install axios

How to Request Data
-For this we will be using http gets bellow is an example on how to request a data

Route '/prompts/promptID'

const response = await axios.get(`http://localhost:5213/prompts/${promptID}`); //reads into response

Breakdonw of the request
const reponse - holds the reponse in a const this is reutnred in a json format
await axios.get() - gets the data from the url () brakets
http://localhost:5213/prompts/${promptID}
- This is run a local host the number 5213 is only tempary and will be changed to your port of choice
- ${promptID} means that you will define a value promptID and set it to the desired id and it will pass that id to the reqested id
this means that if you for example did promptID = 1 you would look like http://localhost:5213/prompts/1


How to Recive Data
the microserve returns a json below is an example return form microservice

{
"title": "Title example 1",
"prompt": "I am in a class called cs361 and my name is"
}

and how to get this data form the microserice would be to use something like
const prompt = response.data; 
bellow the request of data
we recomend adding a check if there is a error or not
