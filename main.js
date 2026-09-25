'use strict'

const valores = [123, 50, 456, 3, 24, 78, 10, 65]

const valoresAbaixoMeta = valores.filter(valor => valor < 100)
const valoresTaxa = valores.map(valor => valor + 5)
const valoresFreteMenor100 = valores.map(valor => valor + 100).filter(valor => valor < 120)

const botaoCriarCards = document.getElementById('criar-cards')
const botaoAbaixoMeta = document.getElementById('abaixo-meta')
const botaoValoresTaxa = document.getElementById('valor-taxa')
const botaoFreteMenor100 = document.getElementById('frete')

function criarCard(valor) {
    const container = document.getElementById('container')
    const card = document.createElement('div')
    
    // Aplica a classe com base no valor de acordo com o style.css
    if (valor < 100) {
        card.className = 'cardVermelho'
    } else {
        card.className = 'cardVerde'
    }
    
    card.textContent = valor
    container.append(card)
}

function criarCards(listaValores) {
    const container = document.getElementById('container')
    container.replaceChildren()
    listaValores.forEach(criarCard)
}

botaoCriarCards.onclick = () => criarCards(valores)
botaoAbaixoMeta.onclick = () => criarCards(valoresAbaixoMeta)
botaoValoresTaxa.onclick = () => criarCards(valoresTaxa)
botaoFreteMenor100.onclick = () => criarCards(valoresFreteMenor100)