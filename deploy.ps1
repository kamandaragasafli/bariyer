# Git deployment script
$ErrorActionPreference = 'Continue'

# Get the script directory
$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $scriptPath

Write-Host "Current directory: $(Get-Location)"
Write-Host "Initializing git repository..."

# Initialize git if needed
if (-not (Test-Path .git)) {
    git init
}

# Add all files
Write-Host "Adding files..."
git add .

# Commit
Write-Host "Committing..."
git commit -m "Initial commit" 2>&1 | Out-Null
if ($LASTEXITCODE -ne 0) {
    Write-Host "Commit failed or nothing to commit"
}

# Set branch to main
Write-Host "Setting branch to main..."
git branch -M main

# Add remote
Write-Host "Adding remote..."
$remotes = git remote 2>&1
if ($remotes -contains 'origin') {
    git remote remove origin 2>&1 | Out-Null
}
git remote add origin https://github.com/kamandaragasafli/bariyer.git 2>&1 | Out-Null

# Push
Write-Host "Pushing to GitHub..."
git push -u origin main

Write-Host "Done!"
