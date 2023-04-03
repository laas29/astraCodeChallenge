# astraCodeChallenge

Full Stack code challenge

## Backend:

#### To run it through a docker container:

Open a terminal and execute:

`cd backend/`

`docker build . -t <your username>/node-web-app`

`docker run -p 4000:4000 -d <your username>/node-web-app`

#### To run it through npm

`cd backend/`

`npm run dev`

You can verify if the application is running when the following message is displayed in the terminal or docker logs (depending on the way you use to run it):

`Apollo server running at http://localhost:4000/graphql`

If you want to edit the queries then access to `http://localhost:4000/graphql`

## Frontend:

Open a terminal and execute:

`cd frontend/`

`npm run dev`

Once the front end app is running please access to `http://localhost:3000/`

![image](https://user-images.githubusercontent.com/6174109/229463500-319486ce-231f-4508-9230-68d52e73f550.png)

