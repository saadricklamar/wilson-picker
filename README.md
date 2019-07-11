# Wilson Picker 

Based off of the 90's show, 'Home Improvement, this app allows users to generate, customize, and save color palettes. 


## Installation for Backend 
* Clone down backend repo: //https://github.com/AdamN8142/wilson-picker-backend
* Dependencies: npm install 
* Start Backend: npm start


## Installation for Frontend
* Clone this repo: //https://github.com/saadricklamar/wilson-picker
* Dependencies: npm install 
* Run npm start and go to localhost:3001 in your browser

## About 

Building this app was a 10 day project at the Turing School of Software & Design.The project allows users to create custom palettes and save them in specified project folders. While selecting a palette, the user has the ability to freeze a color and continue searching through other colors. 

## Possible Endpoints
### GET
### POST
### DELETE 



## GET: /api/v1/projects

#### Example: You will get an array of objects 

    [
        {
            "id": 29,
            "project_name": "robot",
            "created_at": "2019-07-10T21:35:51.458Z",
            "updated_at": "2019-07-10T21:35:51.458Z"
        },
        {
            "id": 30,
            "project_name": "a",
            "created_at": "2019-07-10T21:36:48.909Z",
            "updated_at": "2019-07-10T21:36:48.909Z"
        }
    ]




## GET: /api/v1/projects/:id

### Grab individual project 

#### Example: You will get a single JSON object

    {
        "id": 30,
        "project_name": "a",
        "created_at": "2019-07-10T21:36:48.909Z",
        "updated_at": "2019-07-10T21:36:48.909Z"
    }
    
    
  
## POST: /api/v1/projects
### Add an individual project 

#### Required body
* project_name


## HomeScreen

![WilsonHome](https://user-images.githubusercontent.com/42000931/61068023-2fa97e80-a3c6-11e9-8790-ae055ff0eb13.png)


## Demo

Coming soon..

## Wireframe 

<img width="616" alt="Wilson Picker" src="https://user-images.githubusercontent.com/42000931/60467140-f711e400-9c12-11e9-82d0-77f9a693cbae.png">

## Tech Stack 
* React
* CSS/SCSS
* Jest/Enzyme
* Node.js
* TravisCI

### Contributors 
#### Saad Baradan
#### Adam Niedzwiecki 
