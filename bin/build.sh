#!/bin/bash

# install dependencies
echo "installing dependencies"
npm install
echo "installing dependencies finish"

# "next build" will create a production ready build directory
# "next export" will export nextjs files as bundle like in react app in "out" directory...
# if you want to run both, use this command. next build & next export.
next build
