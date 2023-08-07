<template>
  <div class="flex flex-col h-screen">
    <Navbar/>
    <div class="container mx-auto grow py-4">
      <slot/>
    </div>
    <footer class="bg-gray-800 text-gray-50 text-center py-2">
      Praguzz - 2023
    </footer>
  </div>
</template>