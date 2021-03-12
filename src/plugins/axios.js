import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

const api = axios.create({
  baseURL:
    process.env.VUE_APP_ENV == "dev"
      ? "http://localhost:5000"
      : process.env.VUE_APP_API_BASE_URL
});

Vue.use(VueAxios, api)