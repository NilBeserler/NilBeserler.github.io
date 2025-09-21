#!/bin/bash

# Manual deployment script for GitHub Pages
echo "🚀 Starting manual deployment to GitHub Pages..."

# Build the project
echo "📦 Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Create a temporary branch for deployment
    echo "🌿 Creating deployment branch..."
    git checkout -b gh-pages-temp
    
    # Remove everything except the out directory
    echo "🧹 Cleaning up files..."
    find . -maxdepth 1 -not -name 'out' -not -name '.git' -not -name '.gitignore' -exec rm -rf {} +
    
    # Move contents of out directory to root
    echo "📁 Moving build files to root..."
    mv out/* .
    mv out/.* . 2>/dev/null || true
    rmdir out
    
    # Add all files
    echo "📝 Adding files to git..."
    git add .
    
    # Commit
    echo "💾 Committing changes..."
    git commit -m "Deploy to GitHub Pages - $(date)"
    
    # Push to gh-pages branch
    echo "🚀 Pushing to GitHub Pages..."
    git push origin gh-pages-temp:gh-pages --force
    
    # Clean up
    echo "🧹 Cleaning up..."
    git checkout main
    git branch -D gh-pages-temp
    
    echo "✅ Deployment complete!"
    echo "🌐 Your site should be available at: https://nilbeserler.github.io/web"
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi
