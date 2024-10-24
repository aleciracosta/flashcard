function criacartao(categoria,pergunta,resposta) {
let container = document.getElementById('container')
let cartao = document.createElement('article')
cartao.className = 'cartao'

cartao.innerHTML = '
 <div class="cartao_coteudo">
 <h3>$(categoria)</h3>
<div class="_conteudo _pergunta">
  <p>S(pergunta)</p>
 </div>
 <div class="cartao_conteudo_resposta">
   <p>$

