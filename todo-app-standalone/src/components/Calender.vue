<template>
    <div>
        <div class="flex-auto">
            <div class="flex-auto">
                <PrimeCalender
                    placeholder="Date"
                    showIcon id="calendar-24h" 
                    v-model="datetime24h" 
                    showTime hourFormat="24"
                    manual-input="false" 
                    showButtonBar
                    date-format="yy/mm/dd"
                    touchUI
                />
            </div>
            
            <Button
                severity="primary"
                icon="pi pi-check" 
                text 
                raised
                iconPos="right" 
                @click="sendDate" 
                class="mt-2"> 
            </Button> 
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
            datetime24h: '',
            buttondisplay: null,
            icondisplay: null,
            templatedisplay: null,
        }
    },

    methods: {
        sendDate() {
            console.log(this.datetime24h)
            this.$emit('date-time', {
                name: this.datetime24h
            })

            this.datetime24h = ''
        }
    }
}
</script>