<template>
    <div>
        <div class="flex-auto">
            <div class="flex-auto">
                <PrimeCalender
                    class="custom-calendar"
                    showIcon id="calendar-24h" 
                    v-model="datetime24h" 
                    showTime hourFormat="24"
                    manual-input="false" 
                    showButtonBar 
                />
            </div>
            <Button label="Submit" icon="pi pi-check" iconPos="right" />
        </div>
    </div>
</template>

<script>
import PrimeCalender from "primevue/calendar";
import Button from "primevue/button";

export default {
    components: {
        PrimeCalender,
        Button
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