// dates.js
document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;
    
    const lastModified = new Date(document.lastModified);
    document.getElementById('lastModified').textContent = lastModified.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
});