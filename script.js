"use strict";

Vue.createApp({
  data() {
    return {
      inputType: "password",
      firstInput: "",
      secondInput: "",
      buttonText: "Show Passwords",
      passwordsAreEqual: "",
      hasLowerCaseLetters: "",
      hasUpperCaseLetters: "",
      hasNumbers: "",
      atLeast10chars: "",
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
    checkEquality() {
      if (this.passwordEquality) {
        this.passwordsAreEqual = " ✅ ";
      } else {
        this.passwordsAreEqual = " ❌ ";
      }
    },
    checkLowerCaseLetters() {
      if (this.lowerCaseLetters) {
        this.hasLowerCaseLetters = " ✅ ";
      } else {
        this.hasLowerCaseLetters = " ❌ ";
      }
    },
    checkUpperCaseLetters() {
      if (this.upperCaseLetters) {
        this.hasUpperCaseLetters = " ✅ ";
      } else {
        this.hasUpperCaseLetters = " ❌ ";
      }
    },
    checkNumbers() {
      if (this.containsNumbers) {
        this.hasNumbers = " ✅ ";
      } else {
        this.hasNumbers = " ❌ ";
      }
    },
    check10orMoreChars() {
      if (this.length10atLeast) {
        this.atLeast10chars = " ✅ ";
      } else {
        this.atLeast10chars = " ❌ ";
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
      return this.firstInput === this.secondInput;
    },
    lowerCaseLetters() {
      return this.firstInput.toUpperCase() !== this.firstInput;
    },
    upperCaseLetters() {
      return this.firstInput.toLowerCase() !== this.firstInput;
    },
    containsNumbers() {
      return /\d/.test(this.firstInput);
    },
    length10atLeast() {
      return this.firstInput.length >= 10;
    },
  },
}).mount("#app");
