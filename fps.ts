private FPS(): void
{
    let i: number = 0;
    setInterval(()=>{document.title = `${i}`; i = 0}, 1000);
    
    function FPS(): void
    { i++; requestAnimationFrame(FPS) };
    
    FPS();
};
