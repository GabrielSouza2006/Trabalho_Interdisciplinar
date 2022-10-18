function validar() {
    
    var np = document.getElementById("txtnomepro").value;
    var ep = document.getElementById("txtemail").value;
    var opc = document.getElementById("lsdisciplina").value;
    var nt = document.getElementById("txtnota").value;
    var com = document.getElementById("txtcom").value;

if(np=="") {
    window.alert("digite o nome do professor");
    document.getElementById("txtnomepro").focus();
    document.getElementById("txtnomepro").style.backgroundColor="#f00";
    return false;
}
else if(ep=="") {
    window.alert("digite o email do professor");
    document.getElementById("txtemail").focus();
    document.getElementById("txtemail").style.backgroundColor="#f00";
    return false;
}
else if(opc=="X"){
    window.alert("selecione uma opçao");
    document.getElementById("lsdisciplina").focus();
    document.getElementById("lsdisciplina").value="";
    document.getElementById("lsdisciplina").style.backgroundColor="#f00";

    return false;
    
}
else if(opc==""){
    window.alert("selecione uma opçao");
    document.getElementById("lsdisciplina").focus();
    document.getElementById("lsdisciplina").style.backgroundColor="#f00";
    return false;
}
else if(nt==""){
    window.alert("coloque uma nota");
    document.getElementById("txtnota").value="";
    document.getElementById("txtnota").focus();
    document.getElementById("txtnota").style.backgroundColor="#f00";

    return false;
}
else if(isNaN(nt)) {
    window.alert("Apenas números");
    document.getElementById("txtnota").focus();
    document.getElementById("txtnota").value="";
    document.getElementById("txtnota").style.backgroundColor="#f00";

    return false;
}
else if(nt<1||nt>7) {
    window.alert("Nota de zero(0) a sete(7) ");
    document.getElementById("txtnota").focus();
    document.getElementById("txtnota").value="";
    document.getElementById("txtnota").style.backgroundColor="#f00";

    return false;
}
else if(com==""){
    window.alert("Adicione um comentario");
    document.getElementById("txtcom").focus();
    document.getElementById("txtcom").value="";
    document.getElementById("txtcom").style.backgroundColor="#f00";
    return false;

}
else {
    window.alert("Opinião coletada");
    document.getElementById("txtnomepro").style.backgroundColor="#0f0";
    document.getElementById("txtemail").style.backgroundColor="#0f0";
    document.getElementById("lsdisciplina").style.backgroundColor="#0f0";
    document.getElementById("txtnota").style.backgroundColor="#0f0";
    document.getElementById("txtcom").style.backgroundColor="#0f0";

    return true;

}
}