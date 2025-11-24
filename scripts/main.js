// Mouse Pointer Tracker
document.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;
    console.log(`Mouse Position: X=${clientX}, Y=${clientY}`);
    
});

alert(mousemove);


document.addEventListener('click', (event) => {
    if (event.clientX < 10 && event.clientY < 10) {
        alert("fick deiner mutter lmao");
    }
});