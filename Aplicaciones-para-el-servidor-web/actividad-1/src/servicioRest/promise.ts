import { IPostComent } from "./interfaces"



function getPostComentByIdPromise(id: number): Promise<IPostComent[]> {
    return new Promise(async (resolve, reject) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        if (!response.ok) {
            const error = new Error('El post no contiene comentarios o no existe');
            reject(error)
        }
        const data: IPostComent[] = await response.json();
        resolve(data)
    })

}

export {
    getPostComentByIdPromise
}