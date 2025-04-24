/* var mensaje = "todo listo"

alert ("mensaje") */



    let nota1 = prompt('ingrese  la nota 1 de HTML:')
    alert(nota1)
    nota1 = parseFloat(nota1)
    document.getElementById('nota1html').textContent = nota1.toFixed(1);
 
    let nota2 = prompt('ingrese  la nota 2 de HTML:')
    nota2 = parseFloat(nota2)
    document.getElementById('nota2html').textContent = nota2.toFixed(1);

    let nota3 = prompt('ingrese  la nota 3 de HTML:')
    nota3 = parseFloat(nota3)
    document.getElementById('nota3html').textContent = nota3.toFixed(1);



    let css1 = prompt('ingrese  la nota 1 de CSS:')
    css1 = parseFloat(css1)
    document.getElementById('nota1css').textContent = css1.toFixed(1);
 
    let css2 = prompt('ingrese  la nota 2 de CSS:')
    css2 = parseFloat(css2)
    document.getElementById('nota2css').textContent = css2.toFixed(1);

    let css3 = prompt('ingrese  la nota 3 de CSS:')
    css3 = parseFloat(css3)
    document.getElementById('nota3css').textContent = css3.toFixed(1);



    let js1 = prompt('ingrese  la nota 1 de JS:')
    js1 = parseFloat(js1)
    document.getElementById('nota1js').textContent = js1.toFixed(1);
 
    let js2 = prompt('ingrese  la nota 2 de JS:')
    js2 = parseFloat(js2)
    document.getElementById('nota2js').textContent = js2.toFixed(1);

    let js3 = prompt('ingrese  la nota 3 de JS:')
    js3 = parseFloat(js3)
    document.getElementById('nota3js').textContent = js3.toFixed(1);



    var promhtml = (nota1 + nota2 + nota3) / 3
    document.getElementById('promhtml').textContent = promhtml

    var promcss = (css1 + css2 + css3) / 3
    document.getElementById('promcss').textContent = promcss

    var promjs = (js1 + js2 + js3) / 3
    document.getElementById('promjs').textContent = promjs