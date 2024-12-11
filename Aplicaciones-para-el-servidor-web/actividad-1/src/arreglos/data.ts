//1. Definir un arreglo de objetos en base a sus 3 entidades asignadas con por lo menos 5 elementos. 

interface IProducto {
  id: number;
  nombre: string;
  precio: number;
  categoriaId: number;
  proveedorId: number
}

interface ICategoria {
  id: number;
  nombre: string;
  descripcion: string;
}

interface IProveedor {
  id: number;
  nombre: string;
  contacto: string;
}

const productos: IProducto[] = [
  { id: 1, nombre: 'Laptop', precio: 1200, categoriaId: 1, proveedorId: 1 },
  { id: 2, nombre: 'Cámara', precio: 800, categoriaId: 1, proveedorId: 2 },
  { id: 3, nombre: 'Silla', precio: 150, categoriaId: 2, proveedorId: 2 },
  { id: 4, nombre: 'Camiseta', precio: 20, categoriaId: 3, proveedorId: 3 },
  { id: 5, nombre: 'Zapatos', precio: 60, categoriaId: 3, proveedorId: 3 }
];

const categorias: ICategoria[] = [
  { id: 1, nombre: 'Electrónica', descripcion: 'Dispositivos electrónicos y gadgets' },
  { id: 2, nombre: 'Muebles', descripcion: 'Muebles para el hogar' },
  { id: 3, nombre: 'Ropa', descripcion: 'Ropa y accesorios de vestir' }
];

const proveedores: IProveedor[] = [
  { id: 1, nombre: 'Proveedor A', contacto: 'contactoA@gmail.com' },
  { id: 2, nombre: 'Proveedor B', contacto: 'contactoB@gmail.com' },
  { id: 3, nombre: 'Proveedor C', contacto: 'contactoC@gmail.com' }
];


export {
  productos,
  categorias,
  proveedores,
  ICategoria,
  IProducto,
  IProveedor
};