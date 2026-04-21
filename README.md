# Docker

Following the tutorial at https://www.youtube.com/watch?v=DQdB7wFEygo. A simple web server written with express in node.js that can be run in a Docker container.

## Run locally

First install packages with:

```
npm install
```

Then run with:

```
npm start
```

Stop running with Ctrl + C.

## Run with Docker

First build the image with:

```
docker build -t docker-tutorial .
```

Then start a container made from the image with (optionally, with the ``-d`` flag to start in detached mode):

```
docker run -p 9000:9000 docker-tutorial
```

To find the name of the running container, (in a separate terminal if necessary) run:

```
docker ps
```

Then to stop the container, (in a separate terminal if necessary) run:

```
docker stop <container_name>
```

## Run with Docker compose

Build and start the containers with (optionally, with the ``-d`` flag to start in detached mode):

```
docker compose up
```

Stop the containers with (in a separate terminal if necessary):

```
docker compose down
```
