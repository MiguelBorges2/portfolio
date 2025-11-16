<template>
    <div  v-if="largura > 768" class="d-flex secao justify-content-center align-items-center w-100">
        <div  class="d-flex flex-column tamanho up" >
            <h1 class="text-light fonte">Miguel Borges de Rezende Costa</h1>
            <p class="fonte2"> Olá! Eu sou o Miguel Borges, desenvolvedor Full-Stack formado em Ciência da Computação pela UFU.
Trabalho principalmente com Vue.js, React, Node.js, Spring Boot, Python e Java, criando aplicações modernas, escaláveis e bem estruturadas.

Sou apaixonado por computação, engenharia de software e inteligência artificial, sempre buscando aprender tecnologias novas e criar soluções que realmente façam diferença.

No meu portfólio você vai encontrar alguns dos projetos que desenvolvi ao longo da minha trajetória acadêmica e profissional — cada um deles representando algo que acredito: código limpo, boas práticas e amor pela tecnologia </p>
        <a href="https://portfolio-backend-g9gf.onrender.com"><button class="butao">Baixe meu currículo</button></a>
        </div>
        <img class="imagem" src="@/assets/rosto2.jpeg"></img>
        
    </div>
    <div  v-else class="d-flex flex-column secao justify-content-center align-items-center w-100">
        <div  class="d-flex flex-column tamanho  justify-content-center align-items-center">
            <h1 class="text-light fonte">Miguel Borges</h1>
            <p class="fonte2"> Olá! Eu sou o Miguel Borges, desenvolvedor Full-Stack formado em Ciência da Computação pela UFU.
Trabalho principalmente com Vue.js, React, Node.js, Spring Boot, Python e Java, criando aplicações modernas, escaláveis e bem estruturadas.

Sou apaixonado por computação, engenharia de software e inteligência artificial, sempre buscando aprender tecnologias novas e criar soluções que realmente façam diferença.

No meu portfólio você vai encontrar alguns dos projetos que desenvolvi ao longo da minha trajetória acadêmica e profissional — cada um deles representando algo que acredito: código limpo, boas práticas e amor pela tecnologia </p>
            <img class="imagem" src="@/assets/rosto2.jpeg"></img>
            <button class="butao up">Baixe meu currículo</button>
        </div>
        
        
    </div>
      <div id="forma" class="d-flex tamanho2 secao flex-column justify-content-center align-items-center">
        <h1 class="text-light fonte">Formação</h1>
        <p class="fonte2">Sou formado em <i class="fonte3">Ciência da Computação pela Universidade Federal de Uberlândia (UFU)</i>. Iniciei minha jornada acadêmica em março de 2021 e a concluí em outubro de 2025, apresentando meu Trabalho de Conclusão de Curso sobre “Máquinas de Aprendizado para Detecção de Intrusão em Redes”.

Ao longo da graduação, participei de diversos projetos que me permitiram explorar diferentes áreas da computação e trabalhar com múltiplas tecnologias. Essas experiências fortaleceram meu interesse por desenvolvimento de software, consolidando minha vontade de atuar profissionalmente nessa área.</p>
    </div>
    <div id="exp" class="d-flex tamanho2 secao flex-column justify-content-center align-items-center">
        <h1 class="text-light fonte">Experiência</h1>
        <div class="d-flex w-100 flex-column">
            <h2 class="fonte4">Reforma na Palma da Mão</h2>
            <p class="fonte2">2024 - 2025</p>
            <p class="fonte2">Atuei como o desenvolvedor Full-Stack responsável pelo desenvolvimento da plataforma Web <i class="fonte4">Reforma na Palma da Mão</i></p>   
            <div class="d-flex w-100 justify-content-center">
                <img class="imagem2" src="@/assets/reforma.jfif"></img>
            </div>
            
        </div>
          <div class="d-flex w-100 flex-column">
            <h2 class="fonte4">Estagiário Full-Stack na Algar Telecom</h2>
            <p class="fonte2">2025 - 2025</p>
             <p class="fonte2">Durante seis meses, atuei no desenvolvimento de aplicações utilizando ferramentas low-code, além de trabalhar diretamente com Node.js, Python e TypeScript. Nesse período, pude aprimorar minhas habilidades em automação, integração de serviços e criação de soluções ágeis, combinando a praticidade do low-code com a flexibilidade do desenvolvimento tradicional.

Também participei de equipes que seguiam metodologias ágeis, especialmente o framework Scrum, contribuindo para cerimônias como daily meetings, planning, reviews e retrospectives. Essa experiência fortaleceu minha capacidade de colaborar em equipe, organizar demandas e entregar valor de forma contínua e incremental.</p>   
        </div>
        
    </div>
    <div id="proj" class="d-flex tamanho2 secao flex-column justify-content-center align-items-center">
        <h1 class="text-light fonte">Projetos</h1>
        <div class="d-flex w-100 flex-column">
            <h2 class="fonte4">Reforma na Palma da Mão</h2>
             <p class="fonte2">O website <i class="fonte4">Reforma na Palma da Mão</i> foi desenvolvido utilizando Vue.js no frontend, Node.js no backend e Bootstrap para construção da interface responsiva. A aplicação integra-se a um banco de dados hospedado na AWS, garantindo escalabilidade, segurança e alta disponibilidade.
Além disso, o projeto foi estruturado seguindo boas práticas de arquitetura, separação de camadas e comunicação eficiente entre cliente e servidor, resultando em uma plataforma moderna, estável e de fácil manutenção.</p>   
            <a href="https://reformacasa.facom.ufu.br/"><button class="butao">Confira o Proejto!</button></a>
        </div>
            
          <div class="d-flex w-100 flex-column">
            <h2 class="fonte4">Site méta-linguístico para RPG</h2>
             <p class="fonte2"> Projeto pessoal no qual combinei meus conhecimentos em desenvolvimento web com minha paixão por RPG de mesa. Criei um site que simula um portal real dentro do universo do RPG, incorporando diversos *easter eggs* para que os jogadores possam explorar, interagir e descobrir mais sobre o cenário. A proposta une imersão narrativa com elementos de design e tecnologia, oferecendo uma experiência divertida e dinâmica. </p>
              <a href="https://reformacasa.facom.ufu.br/"><button class="butao">Confira o Proejto!</button></a>
        </div>
        
    </div>

        <div id="conta" class="d-flex tamanho2 secao flex-column justify-content-center align-items-center">
            <h1 class="text-light fonte">Contatos</h1>
            <div class="d-flex w-100 flex-column">
             <p class="fonte2">Celular: 34 984423034</p>   
                <p class="fonte2">Email: miguel.costa@ufu.br</p>
                <p class="fonte2">Linkedin: linkedin.com/in/miguel-borges-de-rezende-costa-633910310</p>
            </div>
            
        
        </div>


</template>
<script setup>

import { ref, onMounted, onUnmounted } from 'vue'

const largura = ref(window.innerWidth)

function atualizarTamanho() {
  largura.value = window.innerWidth
  console.log("Nova largura:", largura.value)
}

onMounted(() => {
  window.addEventListener("resize", atualizarTamanho)
})

onUnmounted(() => {
  window.removeEventListener("resize", atualizarTamanho)
})
</script>
<style scoped>
.secao {
    margin-top: 2%;
}
.tamanho2 {
    width:65%;
}
.fonte4 {
     font-weight: bold;
    color: rgba(156, 156, 156, 1);
}
.butao {
    width: 50%;
    padding: 2%;
    background-color: rgba(63, 142, 0, 1) ;
    color: white;
    box-shadow: 0px 0px 15px rgba(63, 142, 0, 1);
    margin: 2%;
}
.fonte4 {
    text-align: justify;
}
.up {
    margin-top: 5%;
}
    .social {
        
        width: 85%;
        background-color: rgb(27,27,27);
        padding-bottom: 1.5%;
        padding-top: 1.5%;
        color: rgb(156, 156, 156);
        border-radius: 0 0 20px 20px;
    }
    
    .tamanho {
        width: 45%;
    }
    .fonte {
        font-weight: bold;
    }
    .fonte2 {
        font-size: 1.3vw;
        color: rgba(156, 156, 156, 1);
        text-align: justify;
    }
    .fonte3 {
        font-size: 1.3vw;
        font-weight: bold;
        color: rgba(156, 156, 156, 1);
        text-align: justify;    
    }
    .imagem {
        margin-left: 3%;
        width: 17%;
        height: auto;
        border-radius: 60px;
        border: 2px solid white ;
        
    }
    .imagem2 {
        width: 40%;
        height: auto;
        border: 1px solid white;
        margin: 5%;
    }
    @media(max-width: 768px){
        .tamanho {
            width:95%; 
        }
        .tamanho2{
            width: 95%;
        }
        .fonte3 {
            font-size: 2.4vw;
        }
         .fonte2 {
        font-size: 2.4vw;
        color: rgba(156, 156, 156, 1);
    }
        .imagem {
            width: 34%;
            height: auto;
        }
        .imagem2 {
            width: 65%;
        }
    }
      @media(max-width: 500px){
      
        .tamanho {
            width:95%; 
        }
        .tamanho2{
            width: 95%;
        }
        .fonte3 {
            font-size: 3.5vw;
        }
         .fonte2 {
        font-size: 3.5vw;
        color: rgba(156, 156, 156, 1);
    }
        .imagem {
            width: 36%;
            height: auto;
            border-radius: 20px;
        }
    }
</style>