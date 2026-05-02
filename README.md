WEB-SYSTEM 🚀
O WEB-SYSTEM é um projeto desenvolvido como um estudo de caso aprofundado em TypeScript, focado na construção de uma arquitetura robusta para sistemas Web. O objetivo principal foi aplicar padrões de projeto e garantir a integridade dos dados desde o consumo de APIs até a renderização na interface.

🧠 Objetivos de Aprendizado
Este projeto serviu para consolidar conhecimentos em:

Arquitetura Baseada em Classes: Uso de herança com classes abstratas (View, Imprimivel) e interfaces.

TypeScript Avançado: Implementação de Generics em interfaces de modelo e comparação.

Manipulação Rigorosa de Tipos: Solução de problemas de desserialização, transformando dados brutos de APIs (JSON) em instâncias de classes reais.

Tratamento de Datas: Conversão de strings ISO para objetos Date e lógica de comparação de tempo.

Padrão de Projeto Template Method: Utilizado na classe View para padronizar a renderização de componentes HTML.

🛠️ Tecnologias e Ferramentas
Linguagem: TypeScript

Frontend: HTML5 (Template Strings dinâmicas) e CSS3 (Bootstrap).

Serviços: Fetch API para consumo de dados assíncronos.

Infraestrutura: Docker (Ambiente conteinerizado para o backend de testes).

🏗️ Estrutura do Projeto
O sistema foi organizado seguindo princípios de Clean Code e separação de responsabilidades:

1. Camada de Modelo (Models)
Os modelos não são apenas repositórios de dados, mas possuem comportamento.

Cadastro: Classe que valida dados e implementa o contrato de comparação para evitar duplicatas.

Cadastros: Uma coleção que encapsula a lista de registros e fornece métodos de manipulação.

2. Camada de Serviço (Services)
Responsável pela comunicação externa.

ImportaService: Centraliza o fetch e realiza o "cast" (conversão) dos dados brutos para o tipo Cadastro, garantindo que o restante do sistema receba objetos prontos para uso.

3. Camada de Visão (Views)
Utiliza herança para evitar repetição de código. Cada View define seu próprio template, mas herda o método de update e a lógica de renderização da classe pai.

📝 Desafios Técnicos Resolvidos
Durante o desenvolvimento, enfrentamos e resolvemos gargalos reais de produção:

O Problema da Serialização: Resolvemos o erro RangeError: Invalid time value garantindo que strings vindas da API fossem instanciadas como Date no Service.

Filtro de Duplicidade: Implementação do método ehIgual() usando this.nascimento.getTime() para comparar datas com precisão de milissegundos.

Contratos de Interface: Criação da interface Modelo<T> que combina Imprimivel e Comparavel<T>, forçando a padronização dos objetos do sistema.

🚀 Como Executar
Instale as dependências:

Bash
npm install
Inicie o servidor de dados (API):
(Certifique-se de que o backend em Docker ou Node está rodando na porta 8080)

Compilar e Rodar o Frontend:

Bash
npm run start
Desenvolvido por Angelo – Projeto focado em fundamentos de engenharia de software com TypeScript.