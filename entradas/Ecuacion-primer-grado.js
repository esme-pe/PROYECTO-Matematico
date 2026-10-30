contenidoEntrada = `
<section>
<style>
    table { border-collapse: collapse; margin: 1em 0;}
    th, td { padding: 12px 20px; text-align: left; border: 1px solid #ccc; background-color: #F4F0EB; color: #645040; }
    th { background-color: #645040; color: #FAEBF5; }
</style>
    <p>Una ecuación de primer grado es una igualdad con una incógnita elevada a la primera potencia (ax + b = c con a ≠ 0). Resolverla es encontrar el valor de la incógnita que hace verdadera la igualdad. La idea central: lo que hago de un lado, lo hago del otro, para que la balanza siga equilibrada.</p>
    <h3>Procedimiento general</h3>
    <p>Con estos pasos, en este orden, resuelvo cualquier ecuación de primer grado:</p>
    <ol type="1">
	<li>Quito signos de agrupación. Aplico la propiedad distributiva, de adentro hacia afuera, cuidando los signos (un − delante de un paréntesis cambia el signo de todo lo que está dentro).</li>
	<li>Quito denominadores. Multiplico ambos lados por el MCM de los denominadores.</li>
	<li>Reduzco términos semejantes en cada lado.</li>
	<li>Transpongo: paso las incógnitas a un lado y las constantes al otro (lo que suma pasa restando, y viceversa).</li>
	<li>Despejo: divido ambos lados entre el coeficiente de la incógnita.</li>
	<li>Compruebo: sustituyo el valor en la ecuación original y verifico que ambos lados den lo mismo.</li>
    </ol>
    
    <h2>Problema de planteamineto</h2>
	<p>Estoy comparando dos planes de hosting para mi proyecto. El Plan A cobra $120 fijos al mes más $4 por cada GB de almacenamiento. El Plan B cobra $200 fijos al mes más $2 por cada GB. ¿Con cuántos GB los dos planes cuestan lo mismo?</p>
    <h3>Paso 1: Incógnita</h3>
	<p>x = número de GB de almacenamiento al mes.</p>
    <h3>Paso 2: Traducción</h3>
    <table>
	<tr >
            <th>En palabras</th>
            <th>En álgebra</th>
            
        </tr>
        <tr>
            <td onclick="resaltarElemento(this)">Costo del Plan A</td>
            <td onclick="resaltarElemento(this)">120 + 4x</td>
                      
        </tr>
        <tr>
            <td onclick="resaltarElemento(this)">Costo del Plan B</td>
            <td onclick="resaltarElemento(this)">200 + 2x</td>

        <tr>
            <td onclick="resaltarElemento(this)">"Cuestan lo mismo"</td>
            <td onclick="resaltarElemento(this)">=</td>
            
        </tr>
    </table>
    <h3>Paso 3: Ecuación</h3>
    <p>120 + 4x = 200 + 2x</p>
    <h3>Paso 4: Solución</h3>
    <ol type="1">
	<li>Transpongo: 4x − 2x = 200 − 120</li>
	<li>Reduzco: 2x = 80</li>
	<li>Despejo: x = 40</li>
    </ol>
    <h3>Paso 5: Validación contra el enunciado</h3>
    <ul>
	<li>Plan A con 40 GB: 120 + 4(40) = 120 + 160 = $280</li>
	<li>Plan B con 40 GB: 200 + 2(40) = 200 + 80 = $280</li>
	<li>Los dos cuestan $280 ✓</li>
    </ul>
    <p>Respuesta: con 40 GB los dos planes cuestan lo mismo ($280 al mes). Con menos de 40 GB conviene el Plan A y con más de 40 GB conviene el Plan B.</p>

</section>`;
