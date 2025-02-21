import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
            <header>
        <div class="logo"> LLP Trust</div>
<!-- views/layout.ejs (Updated with Hero Section) -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LLP Project</title>
    <link rel="stylesheet" href="/styles.css">
</head>
<body>
    <header>
        <div class="logo">LLP Trust</div>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/resources">Resources</a></li>
                <li><a href="/contact">Contact Us</a></li>
                <li><a href="/testimonials">Testimonials</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/legal">Legal Information</a></li>
            </ul>
        </nav>
    </header>
    
    <div class="hero">
        <h1>Welcome to LLP Trust</h1>
        <p>Your trusted partner in [Your Services]</p>
        <a href="/contact" class="cta-button">Get Started</a>
    </div>

    <main>
        <%- body %>
    </main>
    
    <footer>
        <p>&copy; 2023 LLP Trust. All rights reserved.</p>
    </footer>
</body>
</html>
    </header>

    </div>
  );
}

export default App;
