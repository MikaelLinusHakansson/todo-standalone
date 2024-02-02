<template>
    <div class="d-flex">
        <div class="mb-2">
            <div class="d-flex flex-column">
                <div class="d-flex">

                    <label class="switch">
                        <input type="checkbox" v-model="checkedToggleAll" @change="toggleAll()" />
                        <span class="slider round" />
                    </label>
                        {{ $t('showAll') }}
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

<style scoped>

.switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
    margin: 1rem;

}
.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 20px;
}

.slider:before {
    position:absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
}

input:checked + .slider {
    background-color: #0DC0F0;
}

input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}

.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}
</style>