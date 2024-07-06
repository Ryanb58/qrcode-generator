<template>
    <div class="form-inputs">
      <div class="input-group">
        <label for="link">Link:</label>
        <input
          id="link"
          v-model="qrOptions.link"
          type="text"
          placeholder="Enter URL"
        />
      </div>
      <div class="input-group">
        <label for="dotStyle">Dot Style:</label>
        <select id="dotStyle" v-model="qrOptions.dotStyle">
          <option value="square">Square</option>
          <option value="dots">Dots</option>
          <option value="rounded">Rounded</option>
        </select>
      </div>
      <div class="input-group">
        <label for="colorType">Color Type:</label>
        <select id="colorType" v-model="qrOptions.colorType">
          <option value="single">Single Color</option>
          <option value="gradient">Gradient</option>
        </select>
      </div>
      <div v-if="qrOptions.colorType === 'single'" class="input-group">
        <label for="color">Color:</label>
        <input id="color" v-model="qrOptions.color" type="color" />
      </div>
      <div v-else class="input-group">
        <label for="gradientColor1">Gradient Color 1:</label>
        <input id="gradientColor1" v-model="qrOptions.gradientColor1" type="color" />
        <label for="gradientColor2">Gradient Color 2:</label>
        <input id="gradientColor2" v-model="qrOptions.gradientColor2" type="color" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { storeToRefs } from 'pinia';
  import { useQRCodeStore } from '../stores/qrCodeStore';
  
  const store = useQRCodeStore();
  const { qrOptions } = storeToRefs(store);
  </script>  
  
  <style scoped>
  .form-inputs {
    width: 45%;
  }
  
  .input-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input, select {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  </style>