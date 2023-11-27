import { createI18n } from 'vue-i18n';

const translations = {
    en: {
        todo: 'Todo list',
        save: 'press to save edit',
        delete: 'delete task',
        showDone: 'show done tasks',
        edit: 'Edit',
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
        save: 'tryck för att spara redigering',
        delete: 'ta bort uppgift',
        showDone: 'visa slutförda uppgifter',
        edit: 'Redigera',
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
