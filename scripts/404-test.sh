#! /bin/bash

mkdir .logs 2> /dev/null
blcl ./_book -ro > ./.logs/log.txt
grep broken .logs/log.txt
echo "Detailed results in /.logs"