import { createI18n } from 'vue-i18n';

const translations = {
    en: {
        todo: 'Todo list',
        save: 'Press to save here',
        delete: 'Delete task',
        showDone: 'Show done tasks',
        edit: 'Edit',
        add: 'Add task',
        date: 'Date',
        task: 'Task',
        showCompleted: 'Completed tasks',
        done: 'Done',
        showAll: 'Show all tasks',
        refresh: 'Refresh list',
        showDataTable: 'Show Table View',

        logout: 'Log out',
        login: 'Log in',
        register: 'Register',
        username: 'Username',
        password: 'Password',
        submit: 'Submit',
        clear: 'Clear',
    },

    sv: {
        todo: 'Att göra lista',
        save: 'Tryck för att spara här',
        delete: 'Ta bort uppgift',
        showDone: 'Visa slutförda uppgifter',
        edit: 'Redigera',
        add: 'Lägg till uppgift',
        date: 'Datum',
        task: 'Uppgift',
        showCompleted: 'Visa utförda uppgifter',
        done: 'Klara',
        showAll: 'Visa alla uppgifter',
        refresh: 'Uppdatera lista',
        showDataTable: 'Visa Bords vy',

        logout: 'Logga ut',
        login: 'Logga in',
        register: 'Registrera',
        username: 'Användarnamn',
        password: 'Lösenord',
        submit: 'Skicka in',
        clear: 'Rensa',
    }
};

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages: translations
})

export default i18n;
