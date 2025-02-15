export default class CL_Seccion {
    constructor(){
        this.contAprobados=0;
        this.contReprobados=0;
        this.contEstudiantes=0;
        this.acNota=0;
    }
    cantidadAprobados(){
        return this.contAprobados;
    }
    cantidadReprobados(){
        return this.contReprobados;
    }
    promedio(){
        return this.acNota / this.contEstudiantes;

        }

    procesarEstudiante(estud){
        this.contEstudiantes++;
        this.acNota+=estud.notaFinal;

        if(estud.notaFinal>=48){
            this.contAprobados++;
            
        }else{
            this.contReprobados++;
        }
    }
}