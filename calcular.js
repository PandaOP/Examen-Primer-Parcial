function calcular(){
    var Salario = document.getElementById("Salario_mensual").value

    if (Salario>0) {
        var BR = document.getElementById("Vuelto_Bruto")
    BR.innerHTML=Salario
    var INSS = Salario*0.07
    var V_INSS = document.getElementById("Vuelto_INSS")
    V_INSS.innerHTML = INSS.toFixed(2)
    var Salario_Neto = Salario-INSS
    var SN = document.getElementById("Vuelto_Neto")
    SN.innerHTML = Salario_Neto.toFixed(2)

    var Salario_anual = Salario_Neto*12
    var sobre_exeso=0
    var IR=0
    if (Salario_anual>1 && Salario_anual<100000) {
        IR=0
    }else if (Salario_anual>100000.01 && Salario_anual<200000) {
        sobre_exeso=Salario_anual-100000
        IR = (sobre_exeso*0.15)/12
    }else if (Salario_anual>200000.01 && Salario_anual<350000) {
        sobre_exeso=Salario_anual-200000
        IR = ((sobre_exeso*0.20)+15000)/12
    }else if (Salario_anual>350000.01 && Salario_anual<500000) {
        sobre_exeso=Salario_anual-350000
        IR = ((sobre_exeso*0.25)+45000)/12
    }else if (Salario_anual>500000.01) {
        sobre_exeso=Salario_anual-500000
        IR = ((sobre_exeso*0.30)+82000)/12
    }

    var IR_mostrar = document.getElementById("Vuelto_IR")
    IR_mostrar.innerHTML = IR.toFixed(2)

    var Salario_Sin_IR = Salario_Neto-IR
    var deducciones = document.getElementById("Vuelto_Deducciones")
    deducciones.innerHTML=Salario_Sin_IR.toFixed(2)
    } else{
        alert("SALARIO NO VALIDO")
        
    }
   
    
    
}
