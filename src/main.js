import Vue from 'vue'
import App from './App.vue'
import './helpers/lib'
import './assets/app.scss'
import './registerServiceWorker'

Vue.config.productionTip = false

const ComponentContext = require.context('./icons/', true, /\.svg$/i, 'lazy');
let icons = [];

ComponentContext.keys().forEach((componentFilePath) => {
  const componentName = `icon-${componentFilePath.split('/').pop().split('.')[0]}`;
  icons.push(componentName);
  Vue.component(componentName, () => ComponentContext(componentFilePath));
});

Vue.prototype.$icons = icons

new Vue({
  render: h => h(App),
}).$mount('#app')
