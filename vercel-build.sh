#!/bin/bash

# Set compatible React version
npm install react@18.3.1 react-dom@18.3.1

# Install all dependencies, ignoring peer conflicts
npm install --legacy-peer-deps

# Run build
npm run build
