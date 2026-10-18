contenidoEntrada = `
<section>
<style>
    table { border-collapse: collapse; margin: 1em 0;}
    th, td { padding: 12px 20px; text-align: left; border: 1px solid #ccc; background-color: #F4F0EB; color: #645040; }
    th { background-color: #645040; color: #FAEBF5; }
</style>
    <p class="destacado texto1">Factorizar es escribir una expresión como un producto de expresiones más simples. Es el proceso inverso de multiplicar: al multiplicar se abren los paréntesis, y al factorizar se vuelven a cerrar.</p>

<h2>Termino comun</h2>
    <p class="destacado texto1">Todos los términos comparten un número, una letra o ambos.</p>
    <p class="destacado texto1">Procedimiento: Saco el MCD de los coeficientes y las letras repetidas con menor exponente, lo escribo fuera del paréntesis y dentro pongo lo que queda de cada término.</p>

<h2>Trinomio cuadrado perfecto</h2>
    <p class="destacado texto1">Tiene tres términos, el primero y el último son cuadrados perfectos, y el de en medio es el doble producto de sus raíces.</p>
    <p class="destacado texto1">Procedimiento: Saco las dos raíces, las uno con el signo del término central y elevo al cuadrado.

<h2>Diferencia de cuadrados</h2>
    <p class="destacado texto1">Es un binomio con signo menos entre dos cuadrados perfectos. Una suma de cuadrados no se factoriza así.</p>
    <p class="destacado texto1">Procedimiento: saco la raíz de cada término y escribo dos paréntesis: uno con + y otro con −.</p>



 <table>
        <tr >
            <th>Caso</th>
            <th>IDA</th>
            <th>REGRESO</th>
            
        </tr>
        <tr>
            <td onclick="resaltarElemento(this)">Término común</td>
            <td onclick="resaltarElemento(this)">3x(x + 2) = 3x² + 6x</td>
            <td onclick="resaltarElemento(this)">3x² + 6x = 3x(x + 2)</td>
           
        </tr>
        <tr>
            <td onclick="resaltarElemento(this)">Trinomio cuadrado perfecto</td>
            <td onclick="resaltarElemento(this)">(x + 3)² = x² + 6x + 9</td>
            <td onclick="resaltarElemento(this)">x² + 6x + 9 = (x + 3)²</td>
          
        <tr>
            <td onclick="resaltarElemento(this)">Diferencia de cuadrados</td>
            <td onclick="resaltarElemento(this)">(x + 4)(x − 4) = x² − 16</td>
            <td onclick="resaltarElemento(this)">x² − 16 = (x + 4)(x − 4)</td>
            
        </tr>
    </table>

</section>`;
