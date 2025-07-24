# Build the project
npm run build

# Deploy to GitHub Pages in docs folder
npx gh-pages -d dist -t docs

Write-Host "Deployment completed!"
