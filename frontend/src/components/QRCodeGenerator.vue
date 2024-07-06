<template>
  <div class="container mx-auto px-4 py-8 max-w-6xl">
    <h1 class="text-3xl font-bold mb-8 text-center">QR Code Generator</h1>
    
    <div class="flex flex-col md:flex-row gap-8 mb-8">
      <!-- Left side: Input form -->
      <div class="w-full md:w-1/2">
        <FormInputs />
        <button @click="generateQRCode" class="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Generate QR Code
        </button>
      </div>
      
      <!-- Right side: QR Code display -->
      <div class="w-full md:w-1/2 flex items-center justify-center bg-gray-100 rounded-lg">
        <QRCodeDisplay />
      </div>
    </div>
    
    <!-- Bottom: History list -->
    <div class="w-full">
      <HistoryList />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useQRCodeStore } from '../stores/qrCodeStore';
import FormInputs from './FormInputs.vue';
import QRCodeDisplay from './QRCodeDisplay.vue';
import HistoryList from './HistoryList.vue';

const store = useQRCodeStore();

onMounted(() => {
  store.loadHistoryFromLocalStorage();
});

const generateQRCode = () => store.generateAndSaveQRCode();
</script>