# Jarvis Shell Head - Enhanced Features

## 🖼️ Image Support

### Automatic Image Detection
- Images are automatically detected and displayed for each article
- Supported formats: JPG, JPEG, PNG, SVG, WebP
- Images are placed below the article title
- Images also appear in blog post cards on the home and blog pages

### Image Naming Convention
- Place images in the `images/` directory
- Name images to match article files:
  - `article1.txt` → `images/article1.jpg`
  - `article2.txt` → `images/article2.png`
  - etc.

### Image Styling
- Responsive design that works on all devices
- Hover effects with subtle scaling
- Rounded corners and shadows for modern look
- Automatic fallback if image fails to load

## 📝 HTML Content Support

### Rich Text Formatting
Your `.txt` files can now include HTML tags for enhanced formatting:

```html
<h2>Section Heading</h2>
<p>Regular paragraph text with <strong>bold</strong> and <em>italic</em> emphasis.</p>
<ul>
  <li>Bullet point 1</li>
  <li>Bullet point 2</li>
</ul>
```

### Supported HTML Tags
- `<h2>`, `<h3>`, `<h4>` - Subheadings
- `<p>` - Paragraphs
- `<strong>`, `<b>` - Bold text
- `<em>`, `<i>` - Italic text
- `<ul>`, `<ol>`, `<li>` - Lists
- `<a href="">` - Links
- `<br>` - Line breaks
- And more standard HTML tags

### Smart Content Parsing
- Automatically detects HTML content vs plain text
- Preserves HTML formatting while escaping dangerous content
- Maintains proper paragraph spacing
- Handles mixed content seamlessly

## 🎨 Enhanced Visual Design

### Post Cards with Images
- Featured images in blog post cards
- Hover effects with image scaling
- Consistent aspect ratios
- Fallback for missing images

### Article Layout
- Large featured image below title
- Properly formatted subheadings
- Enhanced typography for better readability
- Responsive image sizing

### Mobile Optimization
- Images scale properly on mobile devices
- Touch-friendly interactions
- Optimized loading for slower connections

## 🚀 Performance Features

### Service Worker
- Offline functionality
- Cached resources for faster loading
- Background updates

### Image Optimization
- Lazy loading for better performance
- Error handling for missing images
- Optimized file formats (SVG for graphics)

## 📱 Responsive Design

### Desktop (1200px+)
- 3-column grid layout
- Large featured images
- Full hover effects

### Tablet (768px - 1199px)
- 2-column grid layout
- Medium-sized images
- Touch-optimized interactions

### Mobile (< 768px)
- Single column layout
- Stacked images
- Touch-friendly buttons

## 🔧 Easy Content Management

### Adding New Articles
1. Create `.txt` file in `blogs/` folder
2. Add corresponding image in `images/` folder
3. Use HTML tags for rich formatting
4. Website automatically detects and displays

### File Organization
```
blogs/
├── article1.txt
├── article2.txt
└── ...

images/
├── article1.svg
├── article2.jpg
└── ...
```

## 🌟 Key Benefits

- **Professional Appearance**: Images make articles more engaging
- **Rich Content**: HTML support allows for better formatting
- **Easy Management**: Simple file-based system
- **Mobile Ready**: Works perfectly on all devices
- **Fast Loading**: Optimized for performance
- **SEO Friendly**: Proper image alt tags and structure
