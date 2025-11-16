<template>
    
    <div class="d-flex w-100 justify-content-center">
        <ul class="d-flex bar2 nav justify-content-around">
            <a class="soc" href="linkedin.com/in/miguel-borges-de-rezende-costa-633910310"><li>Linkedin</li></a>
            <a class="soc"href="https://github.com/MiguelBorges2"><li>Github</li></a>
          
        </ul>
    </div>

   

</template>
<script>
    export default{
        name: "Navbar",
        data() {
            return {

            }
        }
    }

</script>
<style>
    .soc {
        color: inherit;        /* herda a cor do elemento pai */
        text-decoration: none; 
    }
    .soc :hover {
        color:rgba(63, 142, 0, 1);    
    }
    .bar2 {
        width: 85%;
        background-color: rgb(27,27,27);
        padding-bottom: 1.5%;
        padding-top: 1.5%;
        color: rgb(156, 156, 156);
        border-radius: 20px 20px 0 0;
    }
     @media(max-width: 768px){
            
            li {
                font-size: 2.6vw;   
            }
        }
</style>