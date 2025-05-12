// Mouse Pointer Tracker
document.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;
    console.log(`Mouse Position: X=${clientX}, Y=${clientY}`);
    
});

alert(mousemove);