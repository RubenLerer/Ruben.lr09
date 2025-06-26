const a = document.createElement("div");
a.style.color = "black";
a.innerHTML="cabinet d'avocat:SAS Garbarini & ASSOCIES. <br/> Entreprise de conseil en informatique et dévellopement d'intelligence artificielle: Reboot Conseil"

const experience = document.getElementById("experience");
experience.appendChild(a)
experience.style.padding = "20px"

const b = document.createElement("div");
b.style.color = "black";
b.innerHTML="Adresse: 22 rue Mstislav Rostropovitch. <br/> Code postal: 75017 <br/> Adresse mail: rubenlerer@gmail.com <br/> Numéro de téléphone: 07 83 90 83 48 ";
const c = document.getElementById("informations")
c.appendChild(b)
c.style.padding = "20px"




