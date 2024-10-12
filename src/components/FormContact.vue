<script setup>
</script>
<template>
    <h3 class="mb-3">Ou se preferir:</h3>
    <form @submit.prevent="submit">
        <div v-if="loading == 'success'" class="mb-3 d-flex justify-content-center align-items-center text-white" style="min-height: 450px;">
            <div>
                <lottie-player src="src/assets/js/success-animation.json" background="transparent" speed="1" style="width: 300px; height: 300px" direction="1" mode="normal" autoplay></lottie-player>
            </div>
        </div>
        <div v-if="loading == 'sending'" class="mb-3 text-center text-white content-blur">
            <div class="mb-3">
                <label for="name" class="form-label placeholder-glow">
                    <span class="placeholder col-6"></span>
                </label>
                <input type="text" class="form-control placeholder-wave" id="name" name="name" placeholder="Enviando informações" disabled>
            </div>

            <div class="mb-3">
                <label for="email" class="form-label placeholder-glow">
                    <span class="placeholder col-6"></span>
                </label>
                <input type="email" class="form-control placeholder-wave" id="email" name="email" placeholder="Enviando informações" disabled>
            </div>

            <div class="mb-3">
                <div class="row">
                    <div class="col-md-7">
                        <label for="contact" class="form-label placeholder-glow">
                            <span class="placeholder col-8"></span>
                        </label>
                        <input type="tel" class="form-control placeholder-wave" id="contact" name="contact" placeholder="Enviando informações" disabled>
                    </div>
                    <div class="col-md-5 d-flex align-items-end">
                        <div class="form-check placeholder-glow">
                            <input class="form-check-input" type="checkbox" disabled>
                            <label class="form-check-label">
                                <span class="placeholder col-8"></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mb-3">
                <label for="message" class="form-label placeholder-glow">
                    <span class="placeholder col-6"></span>
                </label>
                <textarea class="form-control placeholder-wave" id="message" name="message" rows="3" disabled></textarea>
            </div>

            <div class="w-100 d-flex justify-content-start"><button type="button" class="btn btn-danger placeholder placeholder-glow" disabled>....</button></div>
        </div>

        <div v-if="loading == ''">
            <div class="mb-3 text-white">
                <label for="name" class="form-label">Nome</label>
                <input v-model="name" type="text" class="form-control" id="name" name="name" placeholder="Informe seu nome" required>
            </div>
            <div class="mb-3 text-white">
                <label for="email" class="form-label">E-mail</label>
                <input v-model="email" type="email" class="form-control" id="email" name="email" placeholder="nome@exemplo.com" required>
            </div>
            <div class="mb-3 text-white">
                <div class="row">
                    <div class="col-md-7">
                        <label for="contact" class="form-label">Telefone para contato</label>
                        <input v-model="contact" type="tel" maxlength="15" onkeyup="handlePhone(event)" class="form-control" id="contact" name="contact" placeholder="(99) 99999-9999" required>
                    </div>
                    <div class="col-md-5 d-flex align-items-end">
                        <div class="form-check">
                            <input v-model="whatsapp" class="form-check-input" type="checkbox" name="whatsapp" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">
                                Whatsapp
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mb-3 text-white">
                <label for="message" class="form-label">Mensagem</label>
                <textarea v-model="description" class="form-control" name="description" id="message" rows="3" required></textarea>
            </div>
            <button type="submit" class="btn btn-danger">Enviar</button>
        </div>
    </form>
</template>

<script>
    import axios from '@/assets/js/axios';

    export default {
        data() {
            return {
                name: '',
                email: '',
                contact: '',
                whatsapp: false,
                description: '',
                loading: '',
            };
        },
        methods: {
            async submit() {
                this.loading = 'sending';
                try {
                    const response = await axios.post('/portfolio-contact', {
                        name: this.name,
                        email: this.email,
                        contact: this.contact,
                        whatsapp: this.whatsapp,
                        message: this.message
                    },
                    {
                        headers: {
                            'key': 'bed0dafb-3031-405a-9e8e-b079b7b099fa',
                        }
                    });

                    // Verifique se o status da resposta está na faixa de sucesso
                    if (response.status >= 200 && response.status < 300) {
                        this.loading = 'success';
                    } else {
                        throw new Error('Status de resposta inesperado');
                    }
                } catch (error) {
                    this.loading = 'success';
                }
            }

        }
    }
</script>

<style>
    .content-blur {
        filter: blur(2px); /* Efeito de desfoque gaussiano */
        transition: filter 0.5s ease-in-out;
    }
    .gojo-icon {
        background-image: url('/images/icons/gojo-satoru-gojo.gif');
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>