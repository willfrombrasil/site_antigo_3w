<template>
    <section class="bg-white py-12">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center text-blue-900 mb-8">Perguntas Frequentes</h2>
            <div class="space-y-4">
                <div
                    v-for="(faq, index) in faqs"
                    :key="index"
                    class="border rounded-lg overflow-hidden"
                >
                    <button
                        class="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 focus:outline-none"
                        @click="toggleFaq(index)"
                    >
                        {{ faq.question }}
                    </button>
                    <div
                        :class="{'hidden': activeIndex !== index}"
                        class="px-4 py-2"
                    >
                        {{ faq.answer }}
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>



<script setup>
    import { ref } from 'vue';

    // Defina as perguntas e respostas
    const faqs = [
        { question: 'Quanto tempo leva para desenvolver um site?', answer: 'O tempo médio para desenvolvimento de um site é de 2 a 4 semanas, dependendo da complexidade do projeto.' },
        { question: 'Vocês oferecem suporte após a entrega do projeto?', answer: 'Sim, oferecemos suporte técnico por um período determinado após a entrega, além de planos de manutenção contínua.' },
        { question: 'Quais são as formas de pagamento?', answer: 'Aceitamos pagamentos via transferência bancária, Pix e cartões de crédito. Parcelamentos podem ser negociados.' },
        { question: 'Posso alterar o projeto depois de iniciado?', answer: 'Alterações podem ser feitas durante o desenvolvimento, mas podem impactar no prazo e no custo final.' },
        { question: 'Como é feito o acompanhamento do projeto?', answer: 'Utilizamos ferramentas de gerenciamento para que você possa acompanhar o progresso em tempo real.' },
        { question: 'Vocês trabalham com empresas de outros estados?', answer: 'Sim, atendemos clientes de todo o Brasil de forma remota, com comunicação eficiente.' },
        { question: 'Existe algum tipo de garantia?', answer: 'Sim, garantimos a entrega conforme as especificações acordadas no início do projeto.' },
        { question: 'Posso solicitar uma consultoria antes de contratar?', answer: 'Oferecemos consultoria inicial para entender suas necessidades e sugerir as melhores soluções.' },
        { question: 'Vocês fazem apenas sites ou também sistemas complexos?', answer: 'Desenvolvemos desde sites simples até sistemas corporativos complexos, personalizados para sua empresa.' },
        { question: 'Como posso solicitar um orçamento?', answer: 'Entre em contato pelo nosso WhatsApp ou email e enviaremos um orçamento detalhado após entender suas necessidades.' }
    ];

    const activeIndex = ref(null);

    const toggleFaq = (index) => {
        // Se o índice for o mesmo que o índice ativo, feche, caso contrário, abra
        activeIndex.value = activeIndex.value === index ? null : index;
    };
</script>

<style scoped></style>
