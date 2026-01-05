export const prueba = (req, res) => {
    console.log('desde el controlador de prueba');
    res.send('Prueba desde el controlador');
    
}

export const crearProducto = (req, res) => {
    //enviamos una respuesta
    res.send('Aqui tenemos que crear el producto')
}