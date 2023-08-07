<template>
  <figure class="bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <div class="pt-6 md:p-8 text-center md:text-left space-y-4 dark:text-gray-200">
      <blockquote>
        <p class="text-lg font-medium">
          <slot/>
        </p>
      </blockquote>
    </div>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Test Fig Caption
      </div>
    </figcaption>
  </figure>
</template>
<script setup lang="ts">
</script>