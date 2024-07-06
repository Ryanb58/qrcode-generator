<template>
    <div class="w-full md:w-2/5 text-center">
      <div ref="qrCodeContainer"></div>
      <button 
        @click="downloadQRCode" 
        :disabled="!qrCodeGenerated"
        class="mt-4 px-5 py-2 bg-blue-500 text-white text-base rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        Download QR Code
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref, watch, onMounted, computed } from 'vue';
  import { useQRCodeStore } from '../stores/qrCodeStore';
  
  const store = useQRCodeStore();
  const qrCodeContainer = ref(null);
  
  const renderQRCode = () => {
    if (store.qrCode && qrCodeContainer.value) {
      qrCodeContainer.value.innerHTML = '';
      store.qrCode.append(qrCodeContainer.value);
    }
  };
  
  watch(() => store.qrCode, renderQRCode);
  
  onMounted(renderQRCode);
  
  const downloadQRCode = () => store.downloadQRCode();
  const qrCodeGenerated = computed(() => store.qrCodeGenerated);
  </script>