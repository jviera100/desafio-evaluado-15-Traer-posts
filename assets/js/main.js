// Crear una función asincrónica para obtener los posts
async function getPosts() { // asincronica = simultanea
    console.log('La función getPosts se está ejecutando');
    try { // bloque try codigo que lanza error
        // Realizar un request (consulta) a la API usando async-await
        let respuesta = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await respuesta.json(); // await espera funcion se ejecute
        // fetch devuelve promesa o estado promesa pendiente, resuelta o rechazada

        // Mostrar el resultado del request en HTML
        let lista = document.createElement('ul');
        posts.forEach(post => {
            let elemento = document.createElement('li');
            elemento.textContent = `Post ID: ${post.id}, Título: ${post.title}, Contenido: ${post.body}`; //interpolacion
            lista.appendChild(elemento); // agrega un elemento hijo a elemento padre
        });
        document.getElementById('post-data').appendChild(lista);
    } catch (error) { // bloque catch codigo se ejecuta si se produce error
        // Manejar los posibles errores con try-catch
        console.error('Ha ocurrido un error:', error);
    }
}
