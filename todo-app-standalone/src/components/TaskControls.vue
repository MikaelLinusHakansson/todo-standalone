<template>
    <div class="d-flex">
        <div class="mb-2">
            <div class="d-flex flex-column">
                <div class="d-flex">
                    <label
                        class="mr-2"
                        for="checkedAll">
                            {{ $t('showAll') }}
                    </label>

                    <InputSwitch
                        class="m-1"
                        input-id="checkedAll"
                        v-model="checkedToggleAll" 
                        @click="toggleAll()" >
                            <span 
                                id="checkedAll">
                            </span>
                    </InputSwitch>
                </div>

                <div class="d-flex mt-1">
                    <label 
                        class="mr-2"
                        for="checkedComplated"> 
                            {{ $t('showDone') }}
                    </label>

                    <InputSwitch 
                        class="m-1"
                        input-id="checkedCompleted" 
                        v-model="checkedCompleted" 
                        @click="toggleCompleted()">
                            <span 
                                id="checkedCompleted">
                            </span>
                    </InputSwitch>
                </div>

                <div class="d-flex mt-1">
                    <label
                        class="mr-2" 
                        for="checkDataTable">
                        {{ $t('showDataTable') }}
                    </label>
                    <InputSwitch 
                        class="m-1" 
                        input-id="checkDataTable" 
                        v-model="checkedDataTable" 
                        @click="toggleDataTable()">
                    </InputSwitch>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
import { mapState, mapWritableState, mapActions } from "pinia";
import { useTodoStore } from "@/stores/todoStore.js"
import InputSwitch from 'primevue/inputswitch';
import PrimeCalender from "primevue/calendar";

export default {
    components: {
        InputSwitch,
        PrimeCalender,
    },

    props: {
        toggleAll: Function,
        toggleCompleted: Function,
        toggleEdit: Function,
        toggleDataTable: Function
    },

    computed: {
        ...mapState(useTodoStore, ["tasks"]),
        ...mapWritableState(useTodoStore, ["tasks"]),
    },

    data() {
        return {
            checkedToggleAll: true,
            checkedCompleted: false,
            checkedToggleEdit: false,
            checkedDataTable: false,
        }
    },

    created() {
        this.toggleAll;
    },

    methods: {
        ...mapActions(useTodoStore, ["markDone"]),

        callOnToggleAll() {
            this.checkedToggleAll = !this.checkedToggleAll
        },

        callOnToggleCompleted() {
            this.checkedCompleted = !this.checkedCompleted
        },

        callOnCheckedDataTable() {
            this.checkedDataTable = !this.checkedDataTable
        }
    }
}
</script>