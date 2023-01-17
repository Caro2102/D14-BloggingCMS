module.exports = {
    //Método para dar formato a la fecha
    format_date: date => {
        //Crear fecha y regresar valor
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
    },
};