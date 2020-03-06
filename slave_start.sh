#!/bin/bash

APP=$1
PORT=$2

docker run -it -p "$PORT:3000" \
  --name "$APP" -d "$APP"
