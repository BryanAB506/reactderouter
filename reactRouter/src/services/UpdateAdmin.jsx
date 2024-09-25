async function updateArticulo(id, articuloEditado) {
    try {
        const response = await fetch(`http://localhost:3001/articulos/${id}`, {
            method: 'PUT', // Método PUT para actualizar completamente el artículo
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(articuloEditado) // Convierte el objeto editado a JSON
        });

        if (!response.ok) {
            throw new Error(`Error updating article with id ${id}`);
        }

        return { message: `Article with id ${id} updated successfully` };
    } catch (error) {
        console.error('Error updating article:', error);
        throw error;
    }
}

export default updateArticulo;
