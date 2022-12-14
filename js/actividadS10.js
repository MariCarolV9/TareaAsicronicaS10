/* Actividad 10 */
const txtCodigo = document.getElementById("txtCodigo");
const txtNombre = document.getElementById("txtNombre");
const numNota1 = document.getElementById("numNota1");
const numNota2 = document.getElementById("numNota2");
const numNota3 = document.getElementById("numNota3");
const numNota4 = document.getElementById("numNota4");

const resultado = document.getElementById("resultado");
const resultPromedio = document.getElementById("resultPromedio");
const resultCondicion = document.getElementById("resultCondicion");
const resultObsequio = document.getElementById("resultObsequio");
const btnCalcular = document.getElementById("btnCalcular");

class Estudiante{
    constructor(codigo, nombre, nota1, nota2, nota3, nota4){
        this.codigo = codigo;
        this.nombre = nombre;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.nota4 = nota4;
    }
promedio(){
    let promedio = (this.nota1 * 0.15) + (this.nota2 * 0.20) + 
                   (this.nota3 * 0.25) + (this.nota4 * 0.40);
    return  promedio;
}

condicion(){
    if(this.promedio() >= 12){
    return "Aprobado";
    }else{
    return "Desaprobado";
    }

  }

obsequio(){
    if(this.promedio() > 12){
        return "Se te obsequia una MOCHILA";
        }else{
        return "No hay obsequio"
        }
    }

}

btnCalcular.addEventListener("click", () =>{
    let cod = txtCodigo.value;
    let nom = txtNombre.value;
    let not1 = Number(numNota1.value);
    let not2 = Number(numNota2.value);
    let not3 = Number(numNota3.value);
    let not4 = Number(numNota4.value);

    let nuevoEstudiante = new Estudiante();
    nuevoEstudiante.codigo = cod;
    nuevoEstudiante.nombre = nom;
    nuevoEstudiante.nota1 = not1;
    nuevoEstudiante.nota2 = not2;
    nuevoEstudiante.nota3 = not3;
    nuevoEstudiante.nota4 = not4;

    resultado.innerText = `${nuevoEstudiante.nombre}`;
    resultPromedio.innerText = `${nuevoEstudiante.promedio()}`;
    resultCondicion.innerText = `${nuevoEstudiante.condicion()}`;
    resultObsequio.innerText = `${nuevoEstudiante.obsequio()}`;
    
})