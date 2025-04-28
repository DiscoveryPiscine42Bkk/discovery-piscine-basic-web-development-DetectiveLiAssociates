#!/bin/bash

echo ""
echo "Please Enter Some Words, separated by space,"
echo "maximum of three(3)-arguments:"
echo ""

read -a inputs
echo ""

	for x in {0..2}; do
	echo "${inputs[$x]}"
	done
	
echo ""		

