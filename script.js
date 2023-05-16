"use strict";

Vue.createApp({
  data() {
    return {
      inputType: "password",
      firstInput: "",
      secondInput: "",
    };
  },
  methods: {
    toggleInputs() {
      if (this.inputType === "password") {
        this.inputType = "text";
      } else {
        this.inputType = "password";
      }
    },
  },
  computed: {
    toggledButtonText() {
      if (this.inputType === "password") {
        return "Show Passwords";
      } else {
        return "Hide Passwords";
      }
    },
    passwordEquality() {
      return this.firstInput === this.secondInput && this.firstInput !== ""
        ? " ✅ "
        : " ❌ ";
    },
    lowerCaseLetters() {
      return this.firstInput.toUpperCase() !== this.firstInput
        ? " ✅ "
        : " ❌ ";
    },
    upperCaseLetters() {
      return this.firstInput.toLowerCase() !== this.firstInput
        ? " ✅ "
        : " ❌ ";
    },
    containsNumbers() {
      return /\d/.test(this.firstInput) ? " ✅ " : " ❌ ";
    },
    length10atLeast() {
      return this.firstInput.length >= 10 ? " ✅ " : " ❌ ";
    },
  },
}).mount("#app");
