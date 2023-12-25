<template>
    <div>
      <label for="editTask" /> 
      <label for="editDate" />

      <div>
            <div class="flex flex-column gap-2">
                <span class="p-float-label">
                    <InlineMessage 
                        severity="info"> 
                            {{ $t('task') }}
                    </InlineMessage>
                    
                    <InputText 
                        v-model.trim="editName" 
                        aria-describedby="editTask-help"  
                        id="editTask">
                    </InputText>
                </span>
            </div>
            
            <div class="flex flex-column gap-2">
                <span class="p-float-label">
                    <InlineMessage 
                        severity="info"> 
                            {{ $t('date') }}
                    </InlineMessage>

                    <PrimeCalendar
                        showIcon id="calendar-24h" 
                        v-model="editDate" 
                        showTime hourFormat="24"
                        :manual-input=false
                        showButtonBar
                        date-format="yy/mm/dd"
                        touchUI /> 
                </span>
            </div>
      </div>
      
        <Bbutton
            :disabled="this.completedTask.completed"
            @click="editNameCall"
            class="me-2 m-1"
            severity="primary"
            icon="pi pi-check"
            text
            raised>
        </Bbutton>

        <Bbutton
            @click="deleteTasks"
            class="me-2 m-1"
            severity="danger"
            icon="pi pi-trash">
        </Bbutton>
    </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useTodoStore } from "@/stores/TodoStore"
import { userStore } from '../stores/userStore';

import PrimeCalendar from "primevue/calendar"
import InputText from "primevue/inputtext"
import Bbutton from "primevue/button"
import InlineMessage from 'primevue/inlinemessage';
import dayjs from 'dayjs';

export default {
    components: {
        PrimeCalendar,
        InputText,
        Bbutton,
        InlineMessage,
    },

    props: {
        taskId : Number,
        taskName : String,
        currentIndexTasks : Number,
        currentIndex : Number,
        completedTask: Object,
        markDoneSender: Function
    },

    data() {
        return {
            editName: '',
            editDate: '',
        }
    },

    computed: {
        ...mapState(userStore, ['accessToken'])
    },

    methods: {
        ...mapActions(useTodoStore, ['editTask', 'removeTasks', 'getData']),

        async editNameCall() {
            const accessToken = await this.accessToken;
            console.log(this.accessToken, "from taskEditor editNameCall")

            this.editTask({
                indexFromTasks: this.currentIndex,
                id: this.taskId,
                name: this.editName,
                date: this.editDate,
            }, accessToken)

            this.editName = ""
            this.editDate = ""
        },

        deleteTasks() {
            const accessToken = this.accessToken
            this.removeTasks({
                indexFromTasks: this.currentIndex,
                index: this.taskId
            }, accessToken)
        },
    },
}
</script>