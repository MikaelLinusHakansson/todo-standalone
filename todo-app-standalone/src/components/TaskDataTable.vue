<template>
    <div 
      class="mb-3">
        <DataTable
            :value="tasks"
            paginator
            :rows="5"
            removableSort
            :rowsPerPageOptions="[5, 10, 20, 50]"
            tableStyle="min-width: 50rem">
            
                <Column 
                    field="completed" 
                    header="Completed" 
                    sortable
                    style="width: 25%">
                </Column>
            
                <Column
                    field="name" 
                    header="Name" 
                    sortable  
                    style="width: 25%">
                </Column>
            
                <Column
                    field="date"
                    header="Date"
                    sortable
                    style="width:25%">
                </Column>
        </DataTable>
    </div>
</template>

<script>
import { mapState} from "pinia"
import { useTodoStore } from "@/stores/TodoStore";

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Row from 'primevue/row';

export default {
    components: {
        DataTable,
        Column,
        ColumnGroup,
        Row
    },

    data() {
        return {
        }
    },

    computed: {
        ...mapState(useTodoStore, ['tasks']),
    }
}
</script>