
async function BuscarObjetoById<T>(array: T[], id: number, callback: (error: Error | null, result?: T) => void): Promise<void> {
    try {
        const objeto = await new Promise<T>((resolve, reject) => {
            const result = array.find(e => (e as any).id === id);
            if (!result) {
                reject(new Error('Objeto no encontrado'));
            } else {
                resolve(result);
            }
        });
        callback(null, objeto);
    } catch (error) {
        callback(error as Error);
    }
}





export {
    BuscarObjetoById
}