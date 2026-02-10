function calculerTotal(){
    let prix = document.getElementById("chambre").value;
    let jours = document.getElementById("jours").value;

    let total = prix * jours;

    document.getElementById("total").innerHTML = total + " $";
}
function calculerTotal(){
    let prix = document.getElementById("chambre").value;
    let jours = document.getElementById("jours").value;

    let total = prix * jours;

    document.getElementById("total").innerHTML = total + " $";
}

function choixPaiement(){
    let type = document.getElementById("paiement").value;

    document.getElementById("mobileBox").style.display = "none";
    document.getElementById("carteBox").style.display = "none";

    if(type === "mobile"){
        document.getElementById("mobileBox").style.display = "block";
    }
    else if(type === "carte"){
        document.getElementById("carteBox").style.display = "block";
    }
}
