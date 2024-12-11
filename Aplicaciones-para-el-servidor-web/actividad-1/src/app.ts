








































// import { getPostComentByIdPromise } from "./servicioRest/promise";
// import { IPostComent } from "./servicioRest/interfaces";
// import { BuscarObjetoById } from "./arreglos/callback";
// import { productos, categorias, proveedores, ICategoria, IProducto, IProveedor } from './arreglos/data'


// // 2. Recorrer y mostrar los elementos de sus arreglos de objetos aplicando instrucciones 
// // para ciclos distintas a su preferencia. Ejemplo forEach, for in, for of. 

// console.log('Productos:');
// productos.forEach(producto => {
//   console.log(producto);
// });

// console.log('Categorías:');
// categorias.forEach(categoria => {
//   console.log(categoria);
// });

// console.log('Proveedores:');
// proveedores.forEach(proveedor => {
//   console.log(proveedor);
// });

// // 3. Definir una función que reciba como parámetros: un arreglo de elementos de su 
// // entidad transaccional, un ID y una función con el método de búsqueda; debe devolver 
// // el objeto encontrado, y luego mostrarlo por consola u otro medio usando el Callback.
// // 4. Aplicar en el punto anterior: promises y async/await. 

// //ejemplos de uso

// BuscarObjetoById(productos, 1, async (error, resultado) => {
//   error ? console.error('Error:', error.message) : console.log('Objeto encontrado:', resultado);
// })


// BuscarObjetoById(productos, 1, (error, producto) => {
//   if (!producto) {
//     console.error('Error:', error?.message);
//     return
//   }
//   console.log("Producto: \n", producto)
//   BuscarObjetoById(categorias, producto.categoriaId, (error, categoria) => {
//     if (!categoria) {
//       console.error('Error:', error?.message);
//       return
//     }
//     console.log("Categoria: \n", categoria);
//     BuscarObjetoById(proveedores, producto.proveedorId, (error, proveedor) => {
//       if (!proveedor) {
//         console.error('Error:', error?.message)
//         return
//       }
//       console.log("Proveedor: \n", proveedor)
//     });
//   });
// })

// //5. Buscar un servicio REST de acceso libre distinto al utilizado en clases y aplicar Fetch 
// //con Promises y/o Async/await para su consumo.
// getPostComentByIdPromise(1)
//   .then((comentarios: IPostComent[]) => {
//     console.log(comentarios)
//   })
//   .catch(error => console.log(error))


