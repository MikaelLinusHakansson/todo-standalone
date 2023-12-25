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
                @click="this.getData(this.accessToken)" 
                icon="pi pi-refresh" 
                text raised>
            </Button>
        </div>
    </div>
</template>

<script>
import PrimeCalender from "primevue/calendar";
import Button from "primevue/button";

import { mapActions, mapState } from "pinia";
import { useTodoStore } from "@/stores/TodoStore"
import dayjs from 'dayjs';
import { userStore } from '../stores/userStore';

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

    computed: {
        ...mapState(userStore, ['accessToken'])
    },

    methods: {
        ...mapActions(useTodoStore, ['getData']),

        sendDate() {
            this.$emit('date-time', {
                date: dayjs(this.datetime24h)
            })

            this.datetime24h = ''
        }
    }
}
</script>