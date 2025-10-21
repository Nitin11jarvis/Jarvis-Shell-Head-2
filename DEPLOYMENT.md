# Deployment Guide for Jarvis Shell Head

## Quick Deployment to GitHub Pages

### Step 1: Create GitHub Repository
1. Go to [GitHub.com](https://github.com) and sign in
2. Click "New repository" (green button)
3. Name your repository (e.g., "jarvis-shell-head-blog")
4. Make it public (required for free GitHub Pages)
5. Don't initialize with README (we already have files)
6. Click "Create repository"

### Step 2: Upload Files
1. Download all files from this project
2. Upload them to your GitHub repository:
   - Drag and drop all files into the repository
   - Or use GitHub Desktop/Git command line

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"
7. Wait 2-3 minutes for deployment

### Step 4: Access Your Website
Your blog will be available at:
`https://yourusername.github.io/repository-name`

## Alternative Deployment Options

### Netlify
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Your site will be live instantly
4. Custom domain available

### Vercel
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Deploy automatically
4. Custom domain available

## Adding New Blog Posts

1. Create a new `.txt` file in the `blogs/` folder
2. Follow this format:
   ```
   Your Article Title
   
   Brief description of the article that will appear on the home page and blog listing.
   
   Your full article content goes here. You can write multiple paragraphs.
   
   Each paragraph should be separated by a blank line for proper formatting.
   ```
3. Upload the file to your `blogs/` folder
4. The website will automatically detect and display the new post

## Customization

### Changing Colors
Edit `style.css` and modify these variables:
- Background: `#0e0e0e`
- Text: `#f0f0f0`
- Accent: `#00bfa5`

### Changing Font
In `style.css`, replace:
```css
font-family: 'Poppins', sans-serif;
```
With your preferred font from Google Fonts.

### Adding Analytics
Add Google Analytics or other tracking code to the `<head>` section of all HTML files.

## Troubleshooting

### Blog Posts Not Loading
- Ensure files are in the `blogs/` folder
- Check file extensions are `.txt`
- Verify file permissions on GitHub

### Styling Issues
- Clear browser cache
- Check for typos in CSS
- Ensure all files are uploaded correctly

### Mobile Responsiveness
- Test on different devices
- Use browser developer tools
- Check viewport meta tag is present

## Support

For issues or questions:
- Check the README.md file
- Review the code comments
- Test locally before deploying
