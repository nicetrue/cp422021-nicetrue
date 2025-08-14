<script setup>
import { useTableStore } from './store/table';
import { useQueueStore } from './store/queue';

const tableStore = useTableStore();
const queueStore = useQueueStore();

onMounted(async () => {
  await tableStore.fetchTables();
  await queueStore.fetchQueues();
});
</script>

<template>
  <VApp>
    <RouterView />
  </VApp>
</template>
