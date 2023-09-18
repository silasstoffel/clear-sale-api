#!/bin/sh

ENV_FILE=.env
if [ ! -f "$ENV_FILE" ]; then
    cp .env.example .env
fi

docker-compose up -d

docker exec -it clear-api bash