
function show(idDiv) {
    let screnn = window.matchMedia("(max-width: 768px)");
    let w = document.getElementById ("cardSemanaSanta");
    let x = document.getElementById("cardDeTemporada");
    let y = document.getElementById("cardPlayas");
    let z = document.getElementById("cardDepartamentos");

    if (screnn.matches){
        if (idDiv === "cardSemanaSanta") {
            w.style.display = "block";
            x.style.display = "none";
            y.style.display = "none";
            z.style.display = "none";
        } else if (idDiv === "cardDeTemporada") {
            w.style.display = "none";
            x.style.display = "block";
            y.style.display = "none";
            z.style.display = "none";
        } else if (idDiv === "cardPlayas") {
            w.style.display = "none";
            x.style.display = "none";
            y.style.display = "block";
            z.style.display = "none";
        } else {
            w.style.display = "none";
            x.style.display = "none";
            y.style.display = "none";
            z.style.display = "block";
        }
    }else{
        if (idDiv === "cardSemanaSanta") {
            w.style.display = "block";
            x.style.display = "none";
            y.style.display = "none";
            z.style.display = "none";
        } else if (idDiv === "cardDeTemporada") {
            w.style.display = "none";
            x.style.display = "block";
            y.style.display = "none";
            z.style.display = "none";
        } else if (idDiv === "cardPlayas") {
            w.style.display = "none";
            x.style.display = "none";
            y.style.display = "block";
            z.style.display = "none";
        } else {
            w.style.display = "none";
            x.style.display = "none";
            y.style.display = "none";
            z.style.display = "block";
        }
    }

    


}