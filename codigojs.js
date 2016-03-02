function Duenio(nombre,dni){
    this.nombre=nombre;
    this.dni=dni;
}
var julio = new Duenio('julio',54685215);
console.log(julio);


function Mascota(nombre,tipo){
    this.nombre=nombre;
    this.tipo=tipo;

}

function Paciente(nombre,tipo,enfermedad){
    Mascota.call(this,nombre,tipo,enfermedad);
    this.enfermedad=enfermedad;
}

Paciente.prototype=new Mascota();

var pluto = new Paciente('pluto','perro','seguera');
console.log(pluto);
