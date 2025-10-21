Write-Host "Starting local server for Jarvis Shell Head Blog..." -ForegroundColor Green
Write-Host ""
Write-Host "The website will be available at: http://localhost:8000" -ForegroundColor Yellow
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""
python -m http.server 8000
