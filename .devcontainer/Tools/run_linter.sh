#!/usr/bin/env bash
directory="$1"

# Run pylint first
echo ""
echo ""
echo "-------------- Pylint ----------------"
pylint ${directory}
echo ""
echo ""
echo "-------------- End Of Pylint ----------------"



# Run flake8
echo ""
echo ""
echo "-------------- flake8 ----------------"
flake8 ${directory}
echo ""
echo ""
echo "-------------- End Of flake8 ----------------"
