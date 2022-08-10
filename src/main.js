import { createApp } from 'vue'
import App from './App'
import components from '@/components/UI'

const app = createApp(App);

components.forEach(component => { // components - массив UI компонентов
    app.component(component.name, component) // функция component() - глобально регистрирует компонент
});
app.mount('#app');
