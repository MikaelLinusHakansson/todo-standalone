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
                        @click="callOnToggleAll" >
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
                        @click="callOnToggleCompleted">
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
                        @click="callOnCheckedDataTable">
                    </InputSwitch>
                </div>

                <!-- <div class="d-flex mt-1">
                    <label
                        class="mr-2"
                        for="checkedEdit">
                        {{ $t('edit') }}
                    </label>

                    <InputSwitch
                        class="m-1"
                        input-id="checkedEdit"
                        v-model="checkedToggleEdit"
                        @click="callOnToggleEdit">
                    </InputSwitch>
                </div> -->
            </div>
        </div> 
    </div>
</template>

<script>
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

    data() {
        return {
            checkedToggleAll: false,
            checkedCompleted: false,
            checkedToggleEdit: false,
            checkedDataTable: false,
        }
    },

    created() {
        this.callOnToggleAll()
    },

    methods: {
        callOnToggleAll() {
            this.toggleAll()
            this.checkedToggleAll = !this.checkedToggleAll
        },

        callOnToggleCompleted() {
            this.toggleCompleted()
            this.checkedCompleted = !this.checkedCompleted
        },

        callOnToggleEdit() {
            this.toggleEdit()
            this.checkedToggleEdit = !this.checkedToggleEdit
        },

        callOnCheckedDataTable() {
            this.toggleDataTable()
            this.checkedDataTable = !this.checkedDataTable
        }
    }
}
</script>