#!/bin/bash
find ../../plugin-guides/Guides -name "manifest.json" | xargs -n 1 dirname | xargs -n 1 -I DIR cp -r DIR ..