document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("demo").innerHTML = "";
    fetch("https://catfact.ninja/fact")
        .then(res => res.json())
        .then(data => {
            let fact = data.fact;
            console.log(fact);
            document.getElementById("demo").innerHTML = `<div class="fact-container">${fact}<img src="src/images/cat-space_12435967.png" class="cat"/></div>`;
        });
    
    function catfact() {
        document.getElementById("demo").innerHTML = "";
        fetch("https://catfact.ninja/fact")
            .then(res => res.json())
            .then(data => {
                let fact = data.fact;
                console.log(fact);
                document.getElementById("demo").innerHTML = `<div class="fact-container">${fact}<img src="src/images/cat-space_12435967.png" class="cat"/></div>`;
            });
    }

    document.getElementById("anotherone").addEventListener("click", catfact);
    document.getElementById("copyright").innerHTML = `&copy; ${new Date().getFullYear()} MoonStudio`;

    let visits = localStorage.getItem("visits") || 0;
    visits++;
    localStorage.setItem("visits", visits);
    document.getElementById("visitCount").textContent = visits;
});




