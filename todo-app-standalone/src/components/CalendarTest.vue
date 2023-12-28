<template>
    <Calendar showTime hourFormat="24" showButtonBar date-format="yy/mm/dd" touchUI></Calendar>
</template>

<script>
import Calendar from 'primevue/calendar';

export default {
    components: {
        Calendar
    },

    data() {
        return {}
    }
}
</script>