contenidoEntrada = `
<section>
<style>
    table { border-collapse: collapse; margin: 1em 0;}
    th, td { padding: 12px 20px; text-align: left; border: 1px solid #ccc; background-color: #F4F0EB; color: #645040; }
    th { background-color: #645040; color: #FAEBF5; }
</style>

    <p>Factorizar es deshacer una multiplicación: me dan el resultado y yo encuentro los factores que lo produjeron. Cada caso de esta entrada es el "regreso" de un producto notable o de una multiplicación de polinomios. Para comprobar, siempre multiplico de regreso.</p>
    
     <table>
        <tr >
            <th>Caso</th>
            <th>Es el regreso de...</th>
            
        </tr>
        <tr>
            <td onclick="resaltarElemento(this)">Suma y diferencia de cubos</td>
            <td onclick="resaltarElemento(this)">Binomio por trinomio (cubos)</td>
                      
        </tr>
        <tr>
            <td onclick="resaltarElemento(this)">Trinomio x² + bx + c</td>
            <td onclick="resaltarElemento(this)">Binomio con término común (1.3)</td>

        <tr>
            <td onclick="resaltarElemento(this)">Trinomio ax² + bx + c (aspa simple)</td>
            <td onclick="resaltarElemento(this)">Multiplicación de dos binomios (tabla del Tema 2)</td>
            
        </tr>
    </table>
	
<h3>1. Suma y diferencia de cubos</h3>
<p>Cómo reconocerlo:</p>
<ul>
        <li>Tiene dos términos.</li>
        <li>Los dos tienen raíz cúbica exacta: los coeficientes son cubos perfectos (1, 8, 27, 64, 125, 216, 343, 512, 729, 1000) y los exponentes de las letras son múltiplos de 3.</li>
        <li>Si están sumados es suma de cubos; si están restados es diferencia de cubos.</li>
    </ul>
<p>Formulas</p>
<table>
        <tr >
            <th>a³ + b³ = (a + b)(a² − ab + b²)</th>
            
        </tr>
        <tr>
            <td onclick="resaltarElemento(this)">a³ − b³ = (a − b)(a² + ab + b²)</td>
                      
        </tr>
</table>

<h3>2. Trinomios de la forma x² + bx + c</h3>
<p>Cómo reconocerlo:<p>
<ul>
        <li>Tiene tres términos.</li>
        <li>El coeficiente de x² es 1.</li>
        <li>No es cuadrado perfecto.</li>
</ul>

<table>
        <tr >
            <th>x² + bx + c = (x + m)(x + n)</th>
            
        </tr>
</table>
<p>Ejemplo: x² + 3x − 28. Como c es negativo, los números tienen signos contrarios y el mayor es positivo. Los pares de 28 son 1·28 (diferencia 27), 2·14 (diferencia 12) y 4·7 (diferencia 3 ✓). Los números son +7 y −4, así que el resultado es (x + 7)(x − 4).</p>
<p>Comprobación: x² + (7 − 4)x + (7)(−4) = x² + 3x − 28 ✓</p>

<h3>3. Trinomios de la forma ax² + bx + c (aspa simple)</h3>
<p>Cómo reconocerlo:</p>
<ul>
        <li>Tiene tres términos.</li>
        <li>El coeficiente de x² es distinto de 1..</li>
        <li>No es cuadrado perfecto.</li>
</ul>

<h3>Procedimiento</h3>
<ol type="1">
	<li>Saco el <strong>factor común</strong> primero (si no lo saco, hay muchas más combinaciones que probar).</li>
	<li><strong>Columna izquierda:</strong> dos términos que multiplicados den ax².</li>
	<li><strong>Columna derecha:</strong> dos números que multiplicados den c (cuidando los signos).</li>
	<li><strong>Multiplico en cruz</strong> y <strong>sumo</strong> los dos productos.</li>
	<li>Si la suma da bx ✓, leo los factores <strong>por renglón</strong>. Si no ✗, pruebo otra combinación (cambiar el orden de la derecha también cuenta como combinación distinta).</li>
	<li>Compruebo multiplicando de regreso.</li>
</ol>
<h3>Ejemplo resuelto</h3>
	<p>Factoriza 6x² + 11x − 10</p>
	<p>Como c = −10 es negativo, los números de la derecha tienen signos contrarios. Pruebo combinaciones:</p>

<table>
	<thead>
	<tr>
		<th>Izquierda</th>
		<th>Derecha</th>
		<th>En cruz</th>
		<th>Suma</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td><code>6x</code>, <code>x</code></td>
		<td><code>+5</code>, <code>−2</code></td>
		<td><code>6x·(−2) + x·5</code></td>
		<td><code>−7x</code> ✗</td>
	</tr>
	<tr>
		<td><code>6x</code>, <code>x</code></td>
		<td><code>−2</code>, <code>+5</code></td>
		<td><code>6x·5 + x·(−2)</code></td>
		<td><code>28x</code> ✗</td>
	</tr>
	<tr>
		<td><code>3x</code>, <code>2x</code></td>
		<td><code>+5</code>, <code>−2</code></td>
		<td><code>3x·(−2) + 2x·5</code></td>
		<td><code>4x</code> ✗</td>
	</tr>
	<tr>
		<td><code>3x</code>, <code>2x</code></td>
		<td><code>−2</code>, <code>+5</code></td>
		<td><code>3x·5 + 2x·(−2)</code></td>
		<td><code>11x</code> ✓</td>
	</tr>
	</tbody>
</table>

<h3>3. trinomio cuadrado perfecto</h3>
<p>Cómo reconocerlo: tiene tres términos, el primero y el tercero tienen raíz cuadrada exacta, y el de en medio es el doble producto de esas raíces.</p>
<p>Formulas<p>
<table>
        <tr >
            <th>a² + 2ab + b² = (a + b)²</th>
            
        </tr>
        <tr>
            <td onclick="resaltarElemento(this)">a² − 2ab + b² = (a − b)²</td>
                      
        </tr>
</table>

</section>`;
