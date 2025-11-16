<template>
    <div class="d-flex flex-column full justify-content-between align-items-center">
        <Navbar></Navbar>
        <sec></sec>
        <Social></Social>
    </div>
    
</template>
<script setup>
import Navbar from '@/components/Navbar.vue';
import sec from '@/components/Sec.vue';
import Social from '@/components/Social.vue';
</script>
<style>
.full {
    height: 100vh;
}
</style>