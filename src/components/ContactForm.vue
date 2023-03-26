<template>
  {{ form }}
  <form class="js-form" @submit.prevent="sendEmail">
    <div class="form-group">
      <input
        class="form-field js-field-name"
        type="text"
        placeholder="Your name"
        required
        name="name"
        :v-model="name"
      />
      <span class="form-validation"></span>
      <span class="form-invalid-icon"
        ><i class="mdi mdi-close" aria-hidden="true"></i
      ></span>
    </div>
    <div class="form-group">
      <input
        class="form-field js-field-email"
        type="email"
        placeholder="Your e-mail"
        name="email"
        :v-model="email"
        required
      />
      <span class="form-validation"></span>
      <span class="form-invalid-icon"
        ><i class="mdi mdi-close" aria-hidden="true"></i
      ></span>
    </div>
    <div class="form-group">
      <textarea
        class="form-field js-field-message"
        placeholder="Type the message here"
        name="message"
        :v-model="message"
        required
      ></textarea>
      <span class="form-validation"></span>
      <span class="form-invalid-icon"
        ><i class="mdi mdi-close" aria-hidden="true"></i
      ></span>
    </div>
    <button class="site-btn site-btn--form" type="submit" value="Send">
      Send
    </button>
  </form>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "ContactForm",
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm(
          "service_0xsqfvc",
          "template_bfla1sa",
          e.target,
          "ywuaAwLGPLhw5Hosn",
          {
            name: this.name,
            email: this.email,
            message: this.message,
          }
        );
      } catch (error) {
        console.log({ error });
      }
      // Reset form field
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>

<style></style>
