import Producto from "../models/producto.js";

export const prueba = (req, res) => {
    console.log('desde el controlador de prueba');
    res.send('Prueba desde el controlador');
    
}

export const crearProducto = async (req, res) => {
    //enviamos una respuesta
    //res.send('Aqui tenemos que crear el producto')

    try {
        console.log(req);
        
     const productoNuevo = new Producto(req.body);
         
     await productoNuevo.save();
    
     res.status(201).json({mensaje: 'El producto fue creado exitosamente'})

    } catch (error) {
        console.error(error);
        //error interno del server
        res.status(500).json({mensaje: 'Ocurrio un error al crear el producto'})
    }

}

export const listarProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.status(200).json(productos)
        
    } catch (error) {
        console.error(error);
        res.status(500).json({mensaje: "Ocurrio un error al listar los productos"})
    }
}

export const obtenerProducto = async (req, res) => {
    try {
        console.log(req.params.id);
        const productoBuscado = await Producto.findById(req.params.id);
        if(!productoBuscado) {
            //404 not found
            return res.status(404).json({mensaje: 'No se encontro el producto'})
        }
        res.status(200).json(productoBuscado)
    } catch (error) {
        console.error(error);
        res.status(500).json({mensaje: 'Ocurrio un error al listar el producto'})
    }
}

export const borrarProductoPorID = async (req, res) => {
   try {
        const productoBuscado = await Producto.findByIdAndDelete(req.params.id);
        if(!productoBuscado) {
            return res.status(404).json({mensaje: "No se encontro el producto"})
        }
        return res.status(200).json({mensaje: "El producto fue eliminado correctamente."})
   } catch (error) {
    console.error(error);
    res.status(500).json({mensaje: "Ocurrio un error, no se pudo eliminar el producto"})
   }
}

export const editarProductoPorID = async (req, res) => {
    try {
        const productoBuscado = await Producto.findByIdAndUpdate(req.params.id, req.body);
        if(!productoBuscado) {
            return res.status(404).json({mensaje: "No se encontro el producto"})
        }
        return res.status(200).json({mensaje: "El producto fue editado correctamente"})
    } catch (error) {
        console.error(error);
    res.status(500).json({mensaje: "Ocurrio un error, no se pudo actualizar el producto correctamente."})
    }
}

export const productosPaginados = async (req, res) => {
    try {
        console.log(req.query);
        //primer parametro que extraemos de query es la pagina
        const page = req.query.page || 1;
        //segundo parametro es el limite de producto por pagina
        const limit = req.query.limit || 10;
        //tercer parametro nro de salto para omitir los prodcuto cargados previamente en las paginas 
        const skip = (page - 1) * limit;

        const [productos, cantidadProductos] = await Promise.all([
            Producto.find().skip(skip).limit(limit),
            Producto.countDocuments()
        ]);
        //status code
        res.status(200).json({
            productos,
            paginaActual: page,
            cantidadProductos,
            cantPaginas: Math.ceil(cantidadProductos / limit),
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({mensaje: "Ocurrio un error al listar los productos paginados"})
    }
};