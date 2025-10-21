# Jarvis Shell Head - Modern Blog Website

A modern, minimalist dark-themed blog website built with vanilla HTML, CSS, and JavaScript. Features automatic blog post loading from text files and a clean, responsive design.

## Features

- **Dark Minimalist Design**: Clean, modern interface with dark theme
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Dynamic Content**: Automatically loads blog posts from text files
- **No Framework Dependencies**: Pure HTML, CSS, and JavaScript
- **GitHub Pages Ready**: Can be directly deployed to GitHub Pages

## File Structure

```
├── index.html          # Home page
├── blog.html           # Blog listing page
├── about.html          # About & Contact page
├── article.html        # Individual article page
├── style.css           # Main stylesheet
├── script.js           # JavaScript functionality
├── sw.js              # Service worker for performance
├── blogs/              # Blog posts directory
│   ├── article1.txt
│   ├── article2.txt
│   ├── article3.txt
│   ├── article4.txt
│   └── article5.txt
├── images/             # Article images directory
│   ├── article1.svg
│   ├── article2.svg
│   ├── article3.svg
│   ├── article4.svg
│   └── article5.svg
└── README.md           # This file
```

## How to Add New Blog Posts

1. Create a new `.txt` file in the `blogs/` directory
2. The first line should be the article title
3. The next few lines should be a brief description
4. Add your full article content below
5. The website will automatically detect and display the new post

### Adding Images to Articles

1. Create an image file (JPG, PNG, SVG, or WebP) in the `images/` directory
2. Name it the same as your article file (e.g., `article1.jpg` for `article1.txt`)
3. The image will automatically appear in the article and on the blog listing

### HTML Content Support

You can use HTML tags in your `.txt` files for rich formatting:
- `<h2>Heading</h2>` for subheadings
- `<strong>Bold text</strong>` for emphasis
- `<em>Italic text</em>` for emphasis
- `<p>Paragraph</p>` for custom paragraphs
- And more standard HTML tags

## Deployment to GitHub Pages

1. Create a new GitHub repository
2. Upload all files to the repository
3. Go to repository Settings > Pages
4. Select "Deploy from a branch" and choose "main"
5. Your website will be available at `https://yourusername.github.io/repository-name`

## Local Development

1. Clone or download the repository
2. Open `index.html` in a web browser
3. For full functionality, serve the files through a local server (due to CORS restrictions)

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Customization

### Colors
- Background: `#0e0e0e`
- Text: `#f0f0f0`
- Accent: `#00bfa5`
- Cards: `#1a1a1a`

### Font
- Primary: Poppins (Google Fonts)

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## License

This project is open source and available under the MIT License.
