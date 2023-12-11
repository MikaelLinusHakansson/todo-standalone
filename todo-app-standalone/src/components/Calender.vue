<template>
    <div>
        <div class="flex-auto">
            <div class="flex-auto">
                <PrimeCalender
                    placeholder="Date"
                    showIcon 
                    id="calendar-24h" 
                    v-model="datetime24h"
                    showTime hourFormat="24"
                    :manual-input=false
                    showButtonBar
                    date-format="yy/mm/dd"
                    touchUI />
            </div>
            
            <Button
                class="m-1"
                severity="primary"
                icon="pi pi-arrow-up" 
                text 
                raised
                iconPos="right" 
                @click="sendDate"> 
            </Button> 

            <Button
                class="m-1"
                @click="this.getData()" 
                icon="pi pi-refresh" 
                text raised>
            </Button>
        </div>
    </div>
</template>

<script>
import PrimeCalender from "primevue/calendar";
import Button from "primevue/button";

import { mapActions } from "pinia";
import { useTodoStore } from "@/stores/TodoStore"

export default {
    components: {
        PrimeCalender,
        Button
    },

    data() {
        return {
            datetime24h: '',
            buttondisplay: null,
        }
    },

    created() {
        this.getData()
    },

    methods: {
        ...mapActions(useTodoStore, ['getData']),

        sendDate() {
            this.$emit('date-time', {
                date: this.datetime24h
            })

            this.datetime24h = ''
        }
    }
}
</script>