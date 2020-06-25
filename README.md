<div align="center">
  <h3>Inteligência Artificial</h3>
  <i>Algoritmo Genético</i>
</div>

<h2>Proposta:</h2>
<p>Produção de um algoritmo genético para a descoberta da melhor rota
entre 10 cidades.</p>

<h2>Descrição do problema:</h2>
<p>O problema consiste em estabelecer uma rota que
passe por 10 cidades diferentes (apenas uma vez em cada). As distâncias
entre as cidades serão estabelecidas pelo programador.</p>

> O objetivo do algoritmo será realizar os procedimentos genéticos associados
(<i>reprodução, mutação, seleção</i>, etc) até que, após um número pré determinado
de gerações se encontre um caminho que seja satisfatoriamente menor do que
os da primeira geração.
Composição do algoritmo: O algoritmo deverá contar, no mínimo, com as
seguintes funções:
- <b>Geração da população inicial:</b> deverá conter mecanismos de verificação de
genes repetidos e de indivíduos repetidos também.
O tamanho da população será determinado pelo usuário.
- <b>Cálculo de aptidão:</b> serão utilizados os valores da tabela mostrada
anteriormente para se atribuir à cada rota o seu tamanho total.
- <b>Seleção:</b> deverá ser realizada através de torneio de tamanho definido pelo
usuário ou, através de roleta.
- <b>Reprodução:</b> De acordo com a codificação associada ao problema a
reprodução não poderá ser feita através do método “cruzamento de um ponto”.
- <b>Mutação:</b> Deverá ser realizada pelo método da substituição visto em aula e,
também deverá ser aplicada à uma taxa escolhida pelo usuário (dentro da faixa
de 0 a 5%)
