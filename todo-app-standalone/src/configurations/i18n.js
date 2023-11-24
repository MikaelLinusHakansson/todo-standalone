import { createI18n } from 'vue-i18n';

const translations = {
    en: {
        todo: 'Todo list',
        save: 'save task',
        delete: 'delete task',
        showDone: 'show done tasks',
        edit: 'edit mode',
        add: 'add task',
        delete: 'delete task',
        date: 'date',
        task: 'task',
        showCompleted: 'completed tasks',
        done: 'done',
        showAll: 'show all tasks'
    },

    sv: {
        todo: 'Att göra lista',
        save: 'spara uppgift',
        delete: 'ta bort uppgift',
        showDone: 'visa slutförda uppgifter',
        edit: 'redigera läge',
        add: 'lägg till uppgift',
        date: 'datum',
        task: 'uppgift',
        showCompleted: 'visa utförda uppgifter',
        done: 'klara',
        showAll: 'visa alla uppgifter'
    }
};

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages: translations
})

export default i18n;
