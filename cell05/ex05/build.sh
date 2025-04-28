#!/bin/bash

echo ""
echo "Serial Directory Creator"
echo "Enter Infix Markers (separated by space, if any):"
echo ""

read  -r -a inputs
echo ""

	for tempVarHolder in ${inputs[@]}; do
	# echo "ex$tempVarHolder" // Use this line for Quick Debugging Testing Only
	mkdir "ex$tempVarHolder"
	done
	
echo ""		

