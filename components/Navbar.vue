<template>
  <nav class="bg-gray-800 text-gray-300 drop-shadow-md">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="hidden sm:ml-6 sm:block">
            <NuxtLink to="/" class="hover:bg-gray-700 px-3 py-2 text-sm font-medium">Home</NuxtLink>
            <NuxtLink to="/about" class="hover:bg-gray-700 px-3 py-2 text-sm font-medium pointer-events-none">About</NuxtLink>
<!--            <NuxtLink to="/blog" class="hover:bg-gray-700 px-3 py-2 text-sm font-medium pointer-events-none">Blog</NuxtLink>-->
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>