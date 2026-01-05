export const prueba = (req, res) => {
    console.log('desde el controlador de prueba');
    res.send('Prueba desde el controlador');
    
}

export const crearProducto = async (req, res) => {
    //enviamos una respuesta
    res.send('Aqui tenemos que crear el producto')

    try {
        
    } catch (error) {
        console.error(error);
        //error interno del server
        res.status(500).json({mensaje: 'Ocurrio un error al crear el producto'})
    }

}