<template>
  <div class="login-background">
    <form class="form"
          @submit.prevent>
      <div v-if="submitErrorMessage"
           class="submit-error">{{ submitErrorMessage }}
      </div>
      <span class="login-label">Login Customer</span>
      <img v-if="inProgress"
           class="spinner"
           src="../assets/loading.svg"/>
      <input-field v-model="username"
                   :error-message="usernameErrorMessage"
                   class="form-input"
                   placeholder="Username"
                   @input="usernameErrorMessage = null"/>
      <input-field v-model="password"
                   :error-message="passwordErrorMessage"
                   class="form-input"
                   password
                   placeholder="Password"
                   @input="passwordErrorMessage = null"
      />
      <button-c class="form-input"
                @click="login">LOGIN
      </button-c>
    </form>

  </div>
</template>

<script>

  import * as api from '@/api'
  import ButtonC from '@/components/Button'
  import InputField from '@/components/InputField'

  export default {
    name: 'Login',
    components: { ButtonC, InputField },
    methods: {
      async login() {
        this.submitErrorMessage = null
        this.usernameErrorMessage = null
        this.passwordErrorMessage = null

        try {
          this.inProgress = true
          await api.validate(this.username)
        } catch (error) {
          this.usernameErrorMessage = error
        } finally {
          this.inProgress = false
        }

        if (!this.password || this.password <= 8 || !/[0-9]/.test(this.password)) {
          this.passwordErrorMessage = 'Password must contain more than 8 characters and at least one number'
        }

        if (this.usernameErrorMessage || this.passwordErrorMessage) return

        try {
          this.inProgress = true
          await api.submit({
            username: this.username,
            password: this.password
          })
          await this.$router.push({ name: 'todo' })
        } catch (error) {
          this.submitErrorMessage = error
        } finally {
          this.inProgress = false
        }
      }
    },
    data() {
      return {
        inProgress: false,
        username: null,
        password: null,
        usernameErrorMessage: null,
        passwordErrorMessage: null,
        submitErrorMessage: null
      }
    }
  }
</script>

<style scoped>

.login-background {
  background-image: url("../assets/background.png");
  background-color: transparent;
  position: absolute;
  width: 100%;
  height: calc(100vh);
}

.submit-error {
  background-color: #ffb754;
  width: 100%;
  min-height: 50px;
  margin-bottom: 30px;
  border-radius: 2px;
  padding: 10px;
  font-weight: bold;
}

.form {
  background-color: white;
  min-width: 100px;
  width: 22rem;
  padding: 30px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
}

.form-input {
  margin-top: 10px;
  margin-bottom: 10px;
}

.login-label {
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
}

.spinner {
  z-index: 1;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

</style>
