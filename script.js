// Blog Management System
class BlogManager {
    constructor() {
        this.blogsDirectory = 'blogs/';
        this.articles = [];
        this.init();
    }

    async init() {
        try {
            await this.loadArticles();
            this.setupPageHandlers();
        } catch (error) {
            console.error('Error initializing blog manager:', error);
            this.showError('Failed to load blog articles');
        }
    }

    async loadArticles() {
        try {
            // For GitHub Pages, we need to use a different approach
            // Since we can't directly read directory contents, we'll use a predefined list
            // In a real deployment, you would need a backend or use GitHub API
            const articleFiles = [
                'article1.txt',
                'article2.txt', 
                'article3.txt',
                'article4.txt',
                'article5.txt'
            ];

            this.articles = [];
            let loadedCount = 0;
            
            for (const filename of articleFiles) {
                try {
                    const response = await fetch(`${this.blogsDirectory}${filename}`);
                    if (response.ok) {
                        const content = await response.text();
                        const article = this.parseArticle(content, filename);
                        if (article) {
                            this.articles.push(article);
                            loadedCount++;
                        }
                    } else {
                        console.warn(`Failed to load ${filename}: ${response.status}`);
                    }
                } catch (error) {
                    console.warn(`Could not load ${filename}:`, error);
                    // Check if it's a CORS error
                    if (error.message.includes('CORS') || error.message.includes('fetch')) {
                        console.error('CORS Error: Please run a local server. Use: python -m http.server 8000');
                    }
                }
            }

            // Sort articles by filename (you could modify this to sort by date if you include dates in filenames)
            this.articles.sort((a, b) => b.filename.localeCompare(a.filename));
            
            console.log(`Loaded ${loadedCount} articles successfully`);
            
            // If no articles loaded, show helpful message
            if (this.articles.length === 0) {
                this.showCorsError();
            }
            
        } catch (error) {
            console.error('Error loading articles:', error);
            this.showCorsError();
        }
    }

    showCorsError() {
        const containers = ['recent-posts', 'all-posts'];
        containers.forEach(id => {
            const container = document.getElementById(id);
            if (container) {
                container.innerHTML = `
                    <div class="error">
                        <h3>🚫 CORS Error - Local Development Issue</h3>
                        <p><strong>To fix this issue:</strong></p>
                        <ol>
                            <li>Open Command Prompt/Terminal in this folder</li>
                            <li>Run: <code>python -m http.server 8000</code></li>
                            <li>Open: <a href="http://localhost:8000" target="_blank">http://localhost:8000</a></li>
                        </ol>
                        <p><em>Or use any other local server like Live Server extension in VS Code.</em></p>
                    </div>
                `;
            }
        });
    }

    parseArticle(content, filename) {
        if (!content.trim()) return null;

        const lines = content.split('\n').filter(line => line.trim());
        if (lines.length === 0) return null;

        const title = lines[0].trim();
        const description = lines.slice(1, 4).join(' ').trim();
        const fullContent = content.trim();

        // Check for associated image
        const imageName = this.getImageForArticle(filename);
        
        return {
            title,
            description: description || 'Read the full article to discover more insights.',
            content: fullContent,
            filename,
            slug: filename.replace('.txt', ''),
            image: imageName
        };
    }

    getImageForArticle(filename) {
        const baseName = filename.replace('.txt', '');
        const possibleExtensions = ['jpg', 'jpeg', 'png', 'webp', 'svg'];
        
        for (const ext of possibleExtensions) {
            const imagePath = `images/${baseName}.${ext}`;
            // In a real implementation, you would check if the file exists
            // For now, we'll assume images exist if they follow the naming convention
            return imagePath;
        }
        return null;
    }

    setupPageHandlers() {
        const currentPage = this.getCurrentPage();
        
        switch (currentPage) {
            case 'index':
                this.loadRecentPosts();
                break;
            case 'blog':
                this.loadAllPosts();
                break;
            case 'article':
                this.loadArticle();
                break;
        }
    }

    getCurrentPage() {
        const path = window.location.pathname;
        if (path.includes('blog.html')) return 'blog';
        if (path.includes('article.html')) return 'article';
        if (path.includes('about.html')) return 'about';
        return 'index';
    }

    loadRecentPosts() {
        const container = document.getElementById('recent-posts');
        if (!container) return;

        const recentArticles = this.articles.slice(0, 3);
        this.renderPosts(recentArticles, container);
    }

    loadAllPosts() {
        const container = document.getElementById('all-posts');
        if (!container) return;

        this.renderPosts(this.articles, container);
    }

    renderPosts(articles, container) {
        if (articles.length === 0) {
            container.innerHTML = '<div class="loading">No articles found. Check back soon for new content!</div>';
            return;
        }

        container.innerHTML = articles.map(article => `
            <div class="post-card" onclick="window.location.href='article.html?file=${article.filename}'">
                ${article.image ? `<div class="post-image-container">
                    <img src="${article.image}" alt="${this.escapeHtml(article.title)}" class="post-image" onerror="this.style.display='none'">
                </div>` : ''}
                <h3 class="post-title">${this.escapeHtml(article.title)}</h3>
                <p class="post-preview">${this.escapeHtml(article.description)}</p>
                <button class="read-more-btn">Read More</button>
            </div>
        `).join('');
    }

    async loadArticle() {
        const urlParams = new URLSearchParams(window.location.search);
        const filename = urlParams.get('file');
        
        if (!filename) {
            this.showError('No article specified');
            return;
        }

        const article = this.articles.find(a => a.filename === filename);
        if (!article) {
            this.showError('Article not found');
            return;
        }

        this.renderArticle(article);
    }

    renderArticle(article) {
        const container = document.getElementById('article-content');
        if (!container) return;

        // Update page title
        document.title = `${article.title} - Jarvis Shell Head`;

        // Parse content into paragraphs and format as HTML
        const paragraphs = article.content.split('\n\n').filter(p => p.trim());
        const contentHtml = paragraphs.map(paragraph => {
            const trimmedParagraph = paragraph.trim();
            
            // Check if this is the title (first paragraph)
            if (trimmedParagraph === article.title) {
                return `<h1 class="article-title">${this.escapeHtml(trimmedParagraph)}</h1>`;
            }
            
            // Check for HTML-like content (basic detection)
            if (trimmedParagraph.includes('<') && trimmedParagraph.includes('>')) {
                return trimmedParagraph; // Assume it's already HTML
            }
            
            // Check for headings (lines that are short and don't end with punctuation)
            if (trimmedParagraph.length < 100 && !trimmedParagraph.endsWith('.') && !trimmedParagraph.endsWith('!') && !trimmedParagraph.endsWith('?')) {
                return `<h2 class="article-subheading">${this.escapeHtml(trimmedParagraph)}</h2>`;
            }
            
            // Regular paragraph
            return `<p>${this.escapeHtml(trimmedParagraph)}</p>`;
        }).join('');

        // Add image if available
        const imageHtml = article.image ? `
            <div class="article-image-container">
                <img src="${article.image}" alt="${this.escapeHtml(article.title)}" class="article-image" onerror="this.style.display='none'">
            </div>
        ` : '';

        container.innerHTML = `
            <a href="blog.html" class="back-btn">← Back to Blog</a>
            <div class="article-content">
                <h1 class="article-title">${this.escapeHtml(article.title)}</h1>
                ${imageHtml}
                <div class="article-text">
                    ${contentHtml}
                </div>
            </div>
        `;
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    showError(message) {
        const containers = ['recent-posts', 'all-posts', 'article-content'];
        containers.forEach(id => {
            const container = document.getElementById(id);
            if (container) {
                container.innerHTML = `<div class="error">${message}</div>`;
            }
        });
    }
}

// Initialize the blog manager when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new BlogManager();
});

// Add smooth scrolling for better UX
document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add loading states and error handling
window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
});

// Add service worker for offline functionality (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
