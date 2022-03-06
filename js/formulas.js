const select = document.querySelector('select')
const conteudos = document.querySelectorAll('#slider')

select.addEventListener('change', () => {
    conteudos.forEach(div => div.classList.remove('show'))

    const conteudoSelecionado = [...conteudos].find(div => div.dataset.conteudo === select.value)
    conteudoSelecionado.classList.add('show')
})

function calcularTR() {
    const base = document.getElementById('btr')
    const altura = document.getElementById('atr')
    var resultado = (base.value * altura.value) / 2;
    document.getElementById("imprimirtr").innerHTML = `${resultado} UM²`;
}

function calcularCIR() {
    const lado = document.getElementById('raio')
    var resultado = raio.value * raio.value;
    document.getElementById("imprimircir").innerHTML = `${resultado}<span>π</span> UM²`;
}

function calcularQR() {
    const lado = document.getElementById('ladoq')
    var resultado = lado.value * lado.value;
    document.getElementById("imprimirqr").innerHTML = `${resultado} UM²`;
}

function calcularLO() {
    const altura = document.getElementById('alo')
    const base = document.getElementById('blo')
    var resultado = base.value * altura.value;
    document.getElementById("imprimirlo").innerHTML = `${resultado} UM²`;
}

function calcularTRAP() {
    const baseT = document.getElementById('btrap')
    const baseTValue = baseT.value;
    const baseTConvertido = parseInt(baseTValue);
    const basao = document.getElementById('batrap')
    const basaoValue = basao.value;
    const basaoConvertido = parseInt(basaoValue);
    const alturaT = document.getElementById('atrap')
    const alturaTValue = alturaT.value;
    const alturaTConvertido = parseInt(alturaTValue);

    var somaDasBases = baseTConvertido + basaoConvertido;
    var comAltura = somaDasBases / 2;

    var area = comAltura * alturaTConvertido;

    document.getElementById("imprimirtrap").innerHTML = `${area} UM²`;
}

function calcularTQ() {

    const ladoa = document.getElementById('ladoaq')
    const ladoaValue = ladoa.value;
    const ladoaConvertido = parseInt(ladoaValue);
    const ladob = document.getElementById('ladobq')
    const ladobValue = ladob.value;
    const ladobConvertido = parseInt(ladobValue);
    const ladoc = document.getElementById('ladocq')
    const ladocValue = ladoc.value;
    const ladocConvertido = parseInt(ladocValue);

    var somadoslados = ladoaConvertido + ladocConvertido + ladobConvertido;
    var semiperimetro = somadoslados / 2;

    var raiz = semiperimetro * (semiperimetro - ladoaConvertido) * (semiperimetro - ladobConvertido) * (semiperimetro - ladocConvertido);

    var resultado = Math.sqrt(raiz)

    document.getElementById("imprimirtq").innerHTML = `√${raiz} UM²`;
}

function calcularTE() {
    const lado = document.getElementById('ladote')
    var primeiro = ladote.value * ladote.value;
    var resultado = primeiro / 4;
    document.getElementById("imprimirte").innerHTML = `${resultado}√3 UM`;
}