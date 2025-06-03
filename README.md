# Professional Resume Website

A clean, modern, and responsive resume website built with HTML, CSS, and JavaScript.

## Features

- Responsive design that works on all devices
- Modern and professional layout
- Easy to customize content
- Smooth scrolling navigation
- Skills grid layout
- Timeline-style experience and education sections

## How to Use

1. Simply open the `index.html` file in your web browser to view the resume website locally.

## Customizing Content

To customize the resume content, edit the `resumeData` object in `script.js`. The data is structured as follows:

```javascript
{
    experience: [
        {
            title: "Job Title",
            company: "Company Name",
            date: "Date Range",
            description: "Job Description"
        }
    ],
    education: [
        {
            degree: "Degree Name",
            school: "School Name",
            date: "Date Range",
            description: "Additional Information"
        }
    ],
    skills: [
        "Skill 1",
        "Skill 2",
        ...
    ]
}
```

## Customizing Style

To modify the website's appearance:

1. Edit the CSS variables in the `:root` selector in `styles.css` to change colors
2. Modify the CSS classes to adjust spacing, fonts, and layout

## Browser Compatibility

The website is compatible with all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## Files Structure

- `index.html` - Main HTML file
- `styles.css` - CSS styles
- `script.js` - JavaScript for dynamic content
- `README.md` - This documentation file 