#! /bin/bash
comment=$1
unset GIT_DIR
git add -A
git commit -m "comment:${comment}" 
git push
