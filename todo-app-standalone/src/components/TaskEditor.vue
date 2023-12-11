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
            @click="editNameSender"
            :disabled="this.completed"
            class="me-2 m-1"
            severity="primary"
            icon="pi pi-check"
            text
            raised>
        </Bbutton>

        <Bbutton
            @click="deleteTaskSender"    
            class="me-2 m-1"
            severity="danger"
            icon="pi pi-trash">
        </Bbutton>
    </div>
</template>

<script>
import { mapActions } from "pinia";
import { useTodoStore } from "@/stores/TodoStore"

import PrimeCalendar from "primevue/calendar"
import InputText from "primevue/inputtext"
import Bbutton from "primevue/button"
import InlineMessage from 'primevue/inlinemessage';

export default {
    emits: ['edit-name-sender', 'delete-task-sender'],

    components: {
        PrimeCalendar,
        InputText,
        Bbutton,
        InlineMessage,
    },

    props: {
        taskIndex : Number,
        taskName : String,
        currentIndexTasks : Number,
        currentIndex : Number,
        completed: Boolean,
    },

    data() {
        return {
            editName : '',
            editDate : ''
        }
    },

    methods: {
        ...mapActions(useTodoStore, ['getData']),

        editNameSender() {
            this.$emit('edit-name-sender', {
                indexFromTasks : this.currentIndex,
                index : this.taskIndex,
                name : this.editName,
                date : this.editDate,
                completed : this.completed
            })

            this.editName = ''
            this.editDate = ''
        },

        deleteTaskSender() {
            this.$emit('delete-task-sender', {
                indexFromTasks : this.currentIndexTasks,
                index : this.taskIndex
            })
        }
    }
}
</script>