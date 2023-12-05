<template>
    <div class="container mt-5">
        <div class="flex-auto">
            <div class="flex-auto">
                <prime-calender
                    showIcon id="calendar-24h" 
                    v-model="datetime24h" 
                    showTime hourFormat="24" 
                    manual-input="false" 
                    showButtonBar />
            </div>
        </div>
    </div>
</template>

<script>
import PrimeCalender from "primevue/calendar";

export default {
    components: {
        PrimeCalender
    },

    data() {
        return {
            datetime24h: new Date(),
            buttondisplay: null,
            icondisplay: null,
            templatedisplay: null,
        }
    },
}
</script>