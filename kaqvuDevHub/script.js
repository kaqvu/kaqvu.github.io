document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        observer.observe(element);
    });

    const texturepackBtn = document.getElementById('texturepackBtn');
    if (texturepackBtn) {
        texturepackBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const fileName = '§0! §8§lkaqvu §0§lMX §r§f.zip';
            const link = document.createElement('a');
            link.href = '/' + encodeURIComponent(fileName);
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
});