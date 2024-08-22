function changeBackground() {
    const select = document.getElementById('backgroundSelect');
    const selectedValue = select.value;
    
    let backgroundImage;

    switch (selectedValue) {
        case 'beach':
            backgroundImage = 'url(beach.jpeg)';
            break;
        case 'mountain':
            backgroundImage = 'url(mountain.jpeg)';
            break;
        case 'forest':
            backgroundImage = 'url(forest.jepg)';
            break;
        default:
            backgroundImage = 'none';
    }
    
    document.body.style.backgroundImage = backgroundImage;
}