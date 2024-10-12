<script setup>
    import { ref, computed } from 'vue';
    import sulgipeData from '@/assets/js/import.json'; // Importe seus dados

    const sulgipe = ref(sulgipeData);
    const sortKey = ref('MENSAGEM'); // Define a coluna padrão para ordenação

    // Função de ordenação
    const sortedSulgipe = computed(() => {
        return sulgipe.value.slice().sort((a, b) => {
            if (a[sortKey.value] < b[sortKey.value]) return -1;
            if (a[sortKey.value] > b[sortKey.value]) return 1;
            return 0;
        });
    });

    // Função para alterar a chave de ordenação
    function changeSortKey(key) {
        sortKey.value = key;
    }

    // Verificar "Fatura J"
    function containsFaturaJ(message) {
        return message.includes('Fatura j');
    }
</script>

<template>
    <main class="container-fluid">
        <div class="row my-5">
            <div class="col-12">
                <div class="table-responsive">
                    <table class="table text-secondary align-middle">
                        <thead class="table-dark">
                            <tr>
                                <th>ID Retorno</th>
                                <th>Identificador Arquivo</th>
                                <th>Código Erro</th>
                                <th>Valor (R$)</th>
                                <th>Tipo Fatura</th>
                                <th @click="changeSortKey('MENSAGEM')">Mensagem <i class="bi bi-sort"></i></th>
                                <th>Nome Agente</th>
                                <th>Nome Empresa</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in sortedSulgipe" :key="index">
                                <td>{{ item.IDRETORNO }}</td>
                                <td>{{ item.IDENTIFICADOR_ARQUIVO }}</td>
                                <td>{{ item.CODIGO_ERRO_RETORNO }}</td>
                                <td>{{ item.VALOR_RETORNO.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}</td>
                                <td>{{ item.TIPO_FATURA }}</td>
                                <td :class="{'text-danger': !containsFaturaJ(item.MENSAGEM)}">
                                    {{ item.MENSAGEM }}
                                </td>
                                <td class="text-truncate" style="max-width: 150px;">{{ item.NOME_AGENTE }}</td>
                                <td class="text-truncate" style="max-width: 150px;">{{ item.NOME_EMPRESA }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </main>
</template>

<!-- Bootstrap 5.3 CDN -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css" rel="stylesheet">
