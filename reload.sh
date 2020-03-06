#!/bin/bash

APP=blue-sub-frontend
PORT=3009

./slave_build.sh "$APP"
docker stop "$APP"
docker rm "$APP"
./slave_start.sh "$APP" "$PORT"
