function calcular() {

    let n1, n2, n3, media;

    n1 = document.getElementById('nota_1').value;
    n2 = document.getElementById('nota_2').value;
    n3 = document.getElementById('nota_3').value;
    n4 = document.getElementById('nota_4').value;

    media = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3) +
        parseFloat(n4)) / 4

    document.getElementById('media').innerHTML = media

// se será aprovado

if (media < 5)
    document.getElementById('status').innerHTML = "Que pena, está Reprovado"


else 
    document.getElementById('status').innerHTML = "Parabéns, está aprovado"
   
}