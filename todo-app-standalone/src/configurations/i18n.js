import { createI18n } from 'vue-i18n';

const translations = {
    en: {
        todo: 'Todo list',
        save: 'Press to save here',
        delete: 'Delete task',
        showDone: 'Show done tasks',
        edit: 'Edit',
        add: 'Add task',
        delete: 'Delete task',
        date: 'Date',
        task: 'Task',
        showCompleted: 'Completed tasks',
        done: 'Done',
        showAll: 'Show all tasks',
        refresh: 'Refresh list',
        showDataTable: 'Show Data Table',
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
        showDataTable: 'Visa Data Bord'
    }
};

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages: translations
})

export default i18n;
