<script setup>
    import FormContact from '@/components/FormContact.vue';
</script>

<template>
    <main class="container">
    
        <div class='row my-5'>
            <div class="col-md-6 text-white">
                <h3 class="mb-5">
                    Podemos conversar
                </h3>
                <a target="__blank" class="btn btn-dark text-center d-flex justify-content-center align-items-center w-100" href="https://wa.me/5579999345626">
                    <span class="text-white" style="font-size: 40px;"><font-awesome-icon :icon="['fab', 'whatsapp']" /></span>
                    <h4 class="ms-4">Whatsapp</h4>
                </a>
                <p class="text-center mt-3 d-flex justify-content-center align-items-center w-100">
                    <span class="text-white fs-1" style="font-size: 40px;"><font-awesome-icon :icon="['fas', 'envelope']" class="me-2"/></span>
                     rodrigochantel@gmail.com
                </p>
            </div>
            <div class="col-md-6 custom-mt text-white">
                <FormContact />
            </div>
        </div>
    </main>
</template>
