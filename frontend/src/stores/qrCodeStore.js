import { defineStore } from "pinia";
import QRCodeStyling from "qr-code-styling";

export const useQRCodeStore = defineStore("qrCode", {
  state: () => ({
    qrOptions: {
      link: "",
      dotStyle: "square",
      colorType: "single",
      color: "#000000",
      gradientColor1: "#000000",
      gradientColor2: "#ffffff",
    },
    history: [],
    qrCode: null,
    qrCodeGenerated: false,
  }),

  actions: {
    generateAndSaveQRCode() {
        this.generateQRCode();
        this.saveToHistory();
    },

    generateQRCode() {
      this.qrCode = new QRCodeStyling({
        width: 300,
        height: 300,
        data: this.qrOptions.link,
        dotsOptions: {
          color:
            this.qrOptions.colorType === "single" ? this.qrOptions.color : null,
          gradient:
            this.qrOptions.colorType === "gradient"
              ? {
                  type: "linear",
                  colorStops: [
                    { offset: 0, color: this.qrOptions.gradientColor1 },
                    { offset: 1, color: this.qrOptions.gradientColor2 },
                  ],
                }
              : null,
          type: this.qrOptions.dotStyle,
        },
      });
      this.qrCodeGenerated = true;
    },

    updateQRCode() {
      if (this.qrCode) {
        this.qrCode.update({
          data: this.qrOptions.link,
          dotsOptions: {
            color:
              this.qrOptions.colorType === "single"
                ? this.qrOptions.color
                : null,
            gradient:
              this.qrOptions.colorType === "gradient"
                ? {
                    type: "linear",
                    colorStops: [
                      { offset: 0, color: this.qrOptions.gradientColor1 },
                      { offset: 1, color: this.qrOptions.gradientColor2 },
                    ],
                  }
                : null,
            type: this.qrOptions.dotStyle,
          },
        });
      }
    },

    saveToHistory() {
      const newItem = {
        id: Date.now(),
        ...this.qrOptions,
      };
      this.history.unshift(newItem);
      this.saveHistoryToLocalStorage();
    },

    loadFromHistory(item) {
      this.qrOptions = { ...item };
      this.generateQRCode();
    },

    removeFromHistory(id) {
      const index = this.history.findIndex((item) => item.id === id);
      if (index !== -1) {
        this.history.splice(index, 1);
        this.saveHistoryToLocalStorage();
      }
    },

    saveHistoryToLocalStorage() {
      localStorage.setItem("qrCodeHistory", JSON.stringify(this.history));
    },

    loadHistoryFromLocalStorage() {
      const savedHistory = localStorage.getItem("qrCodeHistory");
      if (savedHistory) {
        this.history = JSON.parse(savedHistory);
      }
    },

    downloadQRCode() {
      if (this.qrCode) {
        this.qrCode.download({ name: "qr-code", extension: "png" });
      }
    },

    setQROption(key, value) {
      this.qrOptions[key] = value;
    },
  },
});
