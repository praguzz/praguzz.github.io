<template>
  <div class="flex flex-col h-screen"><Navbar/>
    <div class="grow dark:bg-gray-800 dark:text-gray-50">
      <slot/>
    </div>
    <footer class="bg-gray-800 text-gray-50 text-center py-2">
      Praguzz - 2023
    </footer>
  </div>
</template>
<script setup lang="ts">
</script>