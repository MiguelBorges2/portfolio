    <template>
        
        <nav class="d-flex w-100 justify-content-center">
            <ul class="d-flex bar nav justify-content-around">
                <li  @click="rola_para('ini')" class="hov">Início</li>
                <li @click="rola_para('forma')">Formação</li>
                <li @click="rola_para('exp')">Experiência</li>
                <li @click="rola_para('proj')">Projetos</li>
                <li @click="rola_para('conta')">Contatos</li>

            </ul>
        </nav>

    

    </template>
    <script setup>
        function rola_para(id){
            document.getElementById(id).scrollIntoView({behavior: "smooth"});
        }

    </script>
    <style>
        li {

        }
        li:hover {
            color: rgba(63, 142, 0, 1);
        }
        .bar {
            width: 85%;
            background-color: rgb(27,27,27);
            padding-bottom: 1.5%;
            padding-top: 1.5%;
            color: rgb(156, 156, 156);
            border-radius: 0 0 20px 20px;
        }
        @media(max-width: 768px){
            .bar {
                width: 100%;
            }
            li {
                font-size: 2.7vw;   
            }
        }
    </style>