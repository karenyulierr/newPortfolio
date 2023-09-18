<script setup>
import { defineComponent, reactive } from 'vue';
import { useDark } from '@vueuse/core';

const currentYear = reactive({
      value: new Date().getFullYear(),
    });


const isDark = useDark();
</script>
<template>
  <footer class="bg-white shadow dark:bg-gray-900">
    <div class="max-w-screen-xl items-center justify-between mx-auto p-4 md:py-8">
    <!-- <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8"> -->
      <div class="sm:flex sm:items-center sm:justify-between">
        <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
            <img
            :src="!isDark.value ? '/logo-dark.png' : '/logo.png'"
            class="h-14"
            alt="Logo"
          />
        </a>
        <ul
          class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400"
        >
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Inicio</a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Proyectos</a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Tecnologías</a>
          </li>
          <li>
            <a href="#" class="hover:underline">Contáctame</a>
          </li>
        </ul>
      </div>
      <hr
        class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
      />
      <span
        class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >© {{ currentYear.value }}
        <a href="https://flowbite.com/" class="hover:underline">KDEVCRAFT</a>.
        Todos los derechos reservados.</span
      >
    </div>
  </footer>
</template>

<style scoped>
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
}
</style>