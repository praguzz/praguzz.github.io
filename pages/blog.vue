<script setup>
  const contents = await queryContent('/blog').find();
  console.log(contents);
</script>
<template>
  <NuxtLayout>
    <section>
      <p>This page will be displayed in /blog route.</p>
      <div v-for="content in contents" :key="content._id">
        <NuxtLink :to="content._path">{{ content.title}}</NuxtLink>
      </div>
    </section>
  </NuxtLayout>
</template>