<template>
  <div 
    class="mb-3">
      <DataTable
        :value="modelValue"
        paginator
        :rows="5"
        removableSort
        :rowsPerPageOptions="[5, 10, 20, 50]"
        tableStyle="min-width: 50rem">
            
          <Column  :field="columnOne"  :header="header"  sortable style="width: 25%" />
          <Column :field="columnTwo"  :header="headerTwo"  sortable   style="width: 25%" />
          <Column :field="columnThree" :header="headerThree" sortable style="width:25%" />
    </DataTable>
  </div>
</template>

<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Row from 'primevue/row';

export default {
  props: {
    modelValue: {
      type: Array,
      default: () => [],
      required: true
    },

    columnOne: {
      type: String,
      default: ''
    },

    columnTwo: {
      type: String,
      default: ''
    },

    columnThree: {
      type: String,
      default: ''
    },

    header: {
      type: String,
      default: ''
    },

    headerTwo: {
      type: String,
      default: ''
    },

    headerThree: {
      type: String,
      default: ''
    }
  },

    components: {
        DataTable,
        Column,
        ColumnGroup,
        Row
    }
}
</script>