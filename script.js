var button = document.getElementById("Darkbtn");
Darkbtn.addEventListener("click", ()=>{
    document.body.classList.toggle("Darkmode");})

    const text = document.querySelector(".sec-text");
        const textLoad = () =>{
            setTimeout(()=>{
                text.textContent ="Suman";
            },1000);
            setTimeout(()=>{
                text.textContent = "LEARN JAVA";
            },4000);
            setTimeout(()=>{
                text.textContent = "LEARN PYTHON";
            },8000);
            setTimeout(()=>{
                text.textContent = "LEARN HTML";
            },12000);
        }
        textLoad();
        setInterval(textLoad, 15000);
