#!/bin/bash

# Target directory for your bio
TARGET_DIR="/Users/saiyashpoojari/Desktop/saiyash07"

echo "⚽ Preparing your GitHub Profile Bio..."

if [ ! -d "$TARGET_DIR" ]; then
  echo "❌ Error: Profile bio directory $TARGET_DIR does not exist."
  exit 1
fi

cd "$TARGET_DIR" || exit

# Initialize Git if not already done
if [ ! -d ".git" ]; then
  git init
  git checkout -b main
fi

# Add all files (README.md and banner.svg)
git add .
git commit -m "initial commit: add FC Barcelona themed profile README and banner asset" 2>/dev/null || echo "Changes already committed."

# Add origin remote (remove first if it exists to avoid conflicts)
git remote remove origin 2>/dev/null
git remote add origin https://github.com/saiyash07/saiyash07.git

echo "🚀 Force pushing to GitHub to overwrite the default template README..."
git push -u origin main --force

if [ $? -eq 0 ]; then
  echo "🏆 Success! Your new GitHub profile README is live."
else
  echo "⚠️ Push failed. Make sure you created the public repository named 'saiyash07' at https://github.com/new"
fi
