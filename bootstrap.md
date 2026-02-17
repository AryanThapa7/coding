# Bootstrap 5 - Complete Teaching Notes

## Table of Contents
1. [Introduction to Bootstrap 5](#introduction)
2. [Getting Started](#getting-started)
3. [Grid System](#grid-system)
4. [Typography](#typography)
5. [Colors and Utilities](#colors-and-utilities)
6. [Components](#components)
7. [Forms](#forms)
8. [JavaScript Components](#javascript-components)
9. [Customization](#customization)
10. [Practice Exercises](#practice-exercises)

---

## Introduction to Bootstrap 5 {#introduction}

### What is Bootstrap?
- **Bootstrap** is a free, open-source CSS framework
- Created by Twitter developers Mark Otto and Jacob Thornton
- Most popular HTML, CSS, and JavaScript framework for developing responsive, mobile-first websites
- Version 5 is the latest major release (launched May 2021)

### Why Use Bootstrap?
- **Faster Development**: Pre-built components and utilities
- **Responsive Design**: Mobile-first approach built-in
- **Cross-browser Compatibility**: Works across all modern browsers
- **Consistent Design**: Standardized components and styling
- **Large Community**: Extensive documentation and community support

---

## Getting Started {#getting-started}

### Method 1: CDN (Recommended for Learning)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap 5 Example</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <h1>Hello, Bootstrap!</h1>
    
    <!-- Bootstrap JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### Method 2: Download Files
1. Go to [getbootstrap.com](https://getbootstrap.com)
2. Download the compiled CSS and JS files
3. Include them in your project

### Method 3: Package Manager
```bash
npm install bootstrap@5.3.0
```

### Essential Meta Tag
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
**Important**: This ensures proper responsive behavior on mobile devices.

---

## Grid System {#grid-system}

### Container Types
```html
<!-- Fixed-width container -->
<div class="container">Content</div>

<!-- Full-width container -->
<div class="container-fluid">Content</div>

<!-- Responsive containers -->
<div class="container-sm">100% wide until small breakpoint</div>
<div class="container-md">100% wide until medium breakpoint</div>
<div class="container-lg">100% wide until large breakpoint</div>
<div class="container-xl">100% wide until extra large breakpoint</div>
<div class="container-xxl">100% wide until extra extra large breakpoint</div>
```

### Breakpoints
| Breakpoint | Class infix | Dimensions |
|------------|-------------|------------|
| Extra small | None | <576px |
| Small | sm | ≥576px |
| Medium | md | ≥768px |
| Large | lg | ≥992px |
| Extra large | xl | ≥1200px |
| Extra extra large | xxl | ≥1400px |

### Basic Grid Structure
```html
<div class="container">
    <div class="row">
        <div class="col">Column 1</div>
        <div class="col">Column 2</div>
        <div class="col">Column 3</div>
    </div>
</div>
```

### Column Sizing
```html
<div class="container">
    <div class="row">
        <!-- Equal width columns -->
        <div class="col">1 of 3</div>
        <div class="col">2 of 3</div>
        <div class="col">3 of 3</div>
    </div>
    
    <div class="row">
        <!-- Specific width columns (out of 12) -->
        <div class="col-4">4 columns wide</div>
        <div class="col-8">8 columns wide</div>
    </div>
    
    <div class="row">
        <!-- Responsive columns -->
        <div class="col-12 col-md-6 col-lg-4">Responsive column</div>
        <div class="col-12 col-md-6 col-lg-8">Responsive column</div>
    </div>
</div>
```

### Practical Grid Example
```html
<div class="container">
    <div class="row">
        <div class="col-12 col-md-4">
            <h3>Sidebar</h3>
            <p>Navigation or additional content</p>
        </div>
        <div class="col-12 col-md-8">
            <h3>Main Content</h3>
            <p>Primary content area</p>
        </div>
    </div>
</div>
```

---

## Typography {#typography}

### Headings
```html
<h1>h1. Bootstrap heading</h1>
<h2>h2. Bootstrap heading</h2>
<h3>h3. Bootstrap heading</h3>
<h4>h4. Bootstrap heading</h4>
<h5>h5. Bootstrap heading</h5>
<h6>h6. Bootstrap heading</h6>

<!-- Alternative heading classes -->
<p class="h1">h1. Bootstrap heading</p>
<p class="h2">h2. Bootstrap heading</p>
```

### Display Headings (Larger, lighter headings)
```html
<h1 class="display-1">Display 1</h1>
<h1 class="display-2">Display 2</h1>
<h1 class="display-3">Display 3</h1>
<h1 class="display-4">Display 4</h1>
<h1 class="display-5">Display 5</h1>
<h1 class="display-6">Display 6</h1>
```

### Text Utilities
```html
<!-- Text alignment -->
<p class="text-start">Left aligned text</p>
<p class="text-center">Center aligned text</p>
<p class="text-end">Right aligned text</p>

<!-- Text transformation -->
<p class="text-lowercase">LOWERCASED TEXT</p>
<p class="text-uppercase">uppercased text</p>
<p class="text-capitalize">capitalized text</p>

<!-- Font weight and style -->
<p class="fw-bold">Bold text</p>
<p class="fw-normal">Normal weight text</p>
<p class="fw-light">Light weight text</p>
<p class="fst-italic">Italic text</p>

<!-- Text decoration -->
<p class="text-decoration-underline">Underlined text</p>
<p class="text-decoration-line-through">Line through text</p>
<p class="text-decoration-none">Remove text decoration</p>
```

### Lead Text and Small Text
```html
<p class="lead">This is a lead paragraph. It stands out from regular paragraphs.</p>
<p><small>This line of text is meant to be treated as fine print.</small></p>
```

---

## Colors and Utilities {#colors-and-utilities}

### Color Classes
```html
<!-- Text colors -->
<p class="text-primary">Primary text</p>
<p class="text-secondary">Secondary text</p>
<p class="text-success">Success text</p>
<p class="text-danger">Danger text</p>
<p class="text-warning">Warning text</p>
<p class="text-info">Info text</p>
<p class="text-light">Light text</p>
<p class="text-dark">Dark text</p>
<p class="text-muted">Muted text</p>

<!-- Background colors -->
<div class="bg-primary text-white">Primary background</div>
<div class="bg-secondary text-white">Secondary background</div>
<div class="bg-success text-white">Success background</div>
<div class="bg-danger text-white">Danger background</div>
<div class="bg-warning text-dark">Warning background</div>
<div class="bg-info text-white">Info background</div>
<div class="bg-light text-dark">Light background</div>
<div class="bg-dark text-white">Dark background</div>
```

### Spacing Utilities
```html
<!-- Margin classes: m-{size} -->
<div class="m-0">No margin</div>
<div class="m-1">Small margin</div>
<div class="m-2">Medium margin</div>
<div class="m-3">Large margin</div>
<div class="m-4">Extra large margin</div>
<div class="m-5">Huge margin</div>

<!-- Padding classes: p-{size} -->
<div class="p-0">No padding</div>
<div class="p-1">Small padding</div>
<div class="p-2">Medium padding</div>
<div class="p-3">Large padding</div>

<!-- Specific sides -->
<div class="mt-3">Margin top</div>
<div class="mb-3">Margin bottom</div>
<div class="ms-3">Margin start (left)</div>
<div class="me-3">Margin end (right)</div>
<div class="mx-3">Margin horizontal</div>
<div class="my-3">Margin vertical</div>

<!-- Same pattern for padding: pt, pb, ps, pe, px, py -->
```

### Display Utilities
```html
<div class="d-none">Hidden element</div>
<div class="d-block">Block element</div>
<div class="d-inline">Inline element</div>
<div class="d-inline-block">Inline-block element</div>
<div class="d-flex">Flex container</div>

<!-- Responsive display -->
<div class="d-none d-md-block">Hidden on small, visible on medium and up</div>
```

---

## Components {#components}

### Buttons
```html
<!-- Basic buttons -->
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>

<!-- Outline buttons -->
<button type="button" class="btn btn-outline-primary">Primary</button>
<button type="button" class="btn btn-outline-secondary">Secondary</button>

<!-- Button sizes -->
<button type="button" class="btn btn-primary btn-lg">Large button</button>
<button type="button" class="btn btn-primary">Default button</button>
<button type="button" class="btn btn-primary btn-sm">Small button</button>

<!-- Block buttons -->
<div class="d-grid gap-2">
    <button class="btn btn-primary" type="button">Block button</button>
    <button class="btn btn-secondary" type="button">Block button</button>
</div>
```

### Cards
```html
<div class="card" style="width: 18rem;">
    <img src="image.jpg" class="card-img-top" alt="Card image">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>

<!-- Card with header and footer -->
<div class="card">
    <div class="card-header">
        Featured
    </div>
    <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    <div class="card-footer text-muted">
        2 days ago
    </div>
</div>
```

### Navigation
```html
<!-- Basic nav -->
<ul class="nav">
    <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
    </li>
</ul>

<!-- Nav tabs -->
<ul class="nav nav-tabs">
    <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
    </li>
</ul>

<!-- Nav pills -->
<ul class="nav nav-pills">
    <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
    </li>
</ul>
```

### Navbar
```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
```

### Alerts
```html
<div class="alert alert-primary" role="alert">
    A simple primary alert—check it out!
</div>
<div class="alert alert-success" role="alert">
    A simple success alert—check it out!
</div>
<div class="alert alert-danger" role="alert">
    A simple danger alert—check it out!
</div>

<!-- Dismissible alert -->
<div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
</div>
```

---

## Forms {#forms}

### Basic Form Elements
```html
<form>
    <!-- Text input -->
    <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" class="form-control" id="email" placeholder="name@example.com">
    </div>
    
    <!-- Password input -->
    <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password">
    </div>
    
    <!-- Textarea -->
    <div class="mb-3">
        <label for="message" class="form-label">Message</label>
        <textarea class="form-control" id="message" rows="3"></textarea>
    </div>
    
    <!-- Select dropdown -->
    <div class="mb-3">
        <label for="country" class="form-label">Country</label>
        <select class="form-select" id="country">
            <option selected>Choose...</option>
            <option value="1">USA</option>
            <option value="2">Canada</option>
            <option value="3">UK</option>
        </select>
    </div>
    
    <!-- Checkboxes -->
    <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="terms">
        <label class="form-check-label" for="terms">
            I agree to the terms and conditions
        </label>
    </div>
    
    <!-- Radio buttons -->
    <div class="mb-3">
        <div class="form-check">
            <input class="form-check-input" type="radio" name="gender" id="male" value="male">
            <label class="form-check-label" for="male">Male</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="gender" id="female" value="female">
            <label class="form-check-label" for="female">Female</label>
        </div>
    </div>
    
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

### Form Validation
```html
<form class="needs-validation" novalidate>
    <div class="mb-3">
        <label for="validationCustom01" class="form-label">First name</label>
        <input type="text" class="form-control" id="validationCustom01" required>
        <div class="valid-feedback">Looks good!</div>
        <div class="invalid-feedback">Please provide a valid first name.</div>
    </div>
    
    <div class="mb-3">
        <label for="validationCustom02" class="form-label">Email</label>
        <input type="email" class="form-control" id="validationCustom02" required>
        <div class="invalid-feedback">Please provide a valid email.</div>
    </div>
    
    <button class="btn btn-primary" type="submit">Submit form</button>
</form>
```

### Input Groups
```html
<!-- Input with prepended text -->
<div class="input-group mb-3">
    <span class="input-group-text">@</span>
    <input type="text" class="form-control" placeholder="Username">
</div>

<!-- Input with appended button -->
<div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="Search">
    <button class="btn btn-outline-secondary" type="button">Search</button>
</div>
```

---

## JavaScript Components {#javascript-components}

### Modal
```html
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                Modal body content goes here.
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div>
    </div>
</div>
```

### Carousel
```html
<div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="slide1.jpg" class="d-block w-100" alt="Slide 1">
        </div>
        <div class="carousel-item">
            <img src="slide2.jpg" class="d-block w-100" alt="Slide 2">
        </div>
        <div class="carousel-item">
            <img src="slide3.jpg" class="d-block w-100" alt="Slide 3">
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
    </button>
</div>
```

### Accordion
```html
<div class="accordion" id="accordionExample">
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                Accordion Item #1
            </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                This is the first item's accordion body.
            </div>
        </div>
    </div>
    <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                Accordion Item #2
            </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                This is the second item's accordion body.
            </div>
        </div>
    </div>
</div>
```

### Tooltips and Popovers
```html
<!-- Tooltip -->
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
    Tooltip on top
</button>

<!-- Popover -->
<button type="button" class="btn btn-lg btn-danger" data-bs-toggle="popover" title="Popover title" data-bs-content="And here's some amazing content.">
    Click to toggle popover
</button>

<!-- JavaScript to initialize tooltips and popovers -->
<script>
    // Initialize tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
    
    // Initialize popovers
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })
</script>
```

---

## Customization {#customization}

### CSS Custom Properties (CSS Variables)
Bootstrap 5 uses CSS custom properties for easy customization:

```css
:root {
    --bs-primary: #0d6efd;
    --bs-secondary: #6c757d;
    --bs-success: #198754;
    --bs-danger: #dc3545;
    --bs-warning: #ffc107;
    --bs-info: #0dcaf0;
}

/* Override primary color */
:root {
    --bs-primary: #ff6b35;
}
```



## Practice Exercises {#practice-exercises}

### Exercise 1: Basic Layout
Create a simple webpage with:
- A navigation bar with your site name and 3 menu items
- A hero section with a large heading and button
- A three-column section with cards
- A footer

### Exercise 2: Responsive Grid
Create a photo gallery that shows:
- 1 column on mobile (xs)
- 2 columns on small screens (sm)
- 3 columns on medium screens (md)
- 4 columns on large screens and up (lg+)

### Exercise 3: Contact Form
Build a contact form with:
- Name, email, and message fields
- Proper validation
- Submit button
- Use Bootstrap form classes

### Exercise 4: Interactive Components
Create a page with:
- A modal that opens when clicking a button
- An accordion with at least 3 sections
- A carousel with 3 slides
- Tooltips on buttons

### Exercise 5: Complete Website
Build a complete business website with:
- Responsive navigation
- Hero section
- Services section (using cards)
- About section
- Contact form
- Footer
- Use consistent color scheme

---

## Quick Reference Cheat Sheet

### Grid System
- `.container` - Fixed width container
- `.container-fluid` - Full width container
- `.row` - Horizontal group of columns
- `.col` - Equal width column
- `.col-{number}` - Specific width column (1-12)
- `.col-{breakpoint}-{number}` - Responsive column

### Common Classes
- `.btn .btn-primary` - Primary button
- `.card` - Card component
- `.alert .alert-success` - Success alert
- `.text-center` - Center align text
- `.d-flex` - Flex container
- `.justify-content-center` - Center flex items
- `.align-items-center` - Vertically center flex items

### Spacing
- `m-{size}` - Margin (0-5)
- `p-{size}` - Padding (0-5)
- `mt-{size}` - Margin top
- `mb-{size}` - Margin bottom
- `ms-{size}` - Margin start (left)
- `me-{size}` - Margin end (right)

### Colors
- `.text-primary` - Primary text color
- `.bg-primary` - Primary background
- `.btn-primary` - Primary button
- Available colors: primary, secondary, success, danger, warning, info, light, dark

---

## Additional Resources

### Official Documentation
- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.3/)
- [Bootstrap Examples](https://getbootstrap.com/docs/5.3/examples/)

### Practice Websites
- [W3Schools Bootstrap 5 Tutorial](https://www.w3schools.com/bootstrap5/)
- [Bootstrap 5 Cheat Sheet](https://bootstrap-cheatsheet.themeselection.com/)
