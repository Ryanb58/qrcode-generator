<template>
    <div class="h-full">
      <h2 class="text-xl font-bold mb-4">History</h2>
      <ul class="space-y-4 max-h-[400px] md:max-h-[600px] overflow-y-auto">
        <li v-for="item in history" :key="item.id" class="bg-white rounded-lg shadow-md p-4">
          <div class="mb-2">
            <div class="font-semibold text-sm break-all mb-1">{{ truncateLink(item.link) }}</div>
            <div class="flex items-center">
              <div
                class="w-5 h-5 rounded-full mr-2 border border-gray-300"
                :style="getColorPreviewStyle(item)"
              ></div>
              <span class="text-xs text-gray-600">{{ item.dotStyle }}</span>
            </div>
          </div>
          <div class="flex justify-between">
            <button @click="loadFromHistory(item)" class="bg-green-500 hover:bg-green-600 text-white text-xs py-1 px-3 rounded">
              Load
            </button>
            <button @click="removeFromHistory(item.id)" class="bg-red-500 hover:bg-red-600 text-white text-xs py-1 px-3 rounded">
              Delete
            </button>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { computed } from "vue";
  import { useQRCodeStore } from "../stores/qrCodeStore";
  
  const store = useQRCodeStore();
  
  const history = computed(() => store.history);
  
  const truncateLink = (link) => {
    return link.length > 30 ? link.substring(0, 27) + "..." : link;
  };
  
  const getColorPreviewStyle = (item) => {
    if (item.colorType === "single") {
      return { backgroundColor: item.color };
    } else {
      return {
        background: `linear-gradient(to right, ${item.gradientColor1}, ${item.gradientColor2})`,
      };
    }
  };
  
  const loadFromHistory = (item) => store.loadFromHistory(item);
  const removeFromHistory = (id) => store.removeFromHistory(id);
  </script>