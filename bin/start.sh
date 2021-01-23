#!/bin/bash

# kill node process
#sudo killall node

# "next start", starts nextjs server for .next (renamed it to dist) build folder
# cross-env NODE_ENV=production next start -p 4000
cross-env NODE_ENV=production next start -p 4000
