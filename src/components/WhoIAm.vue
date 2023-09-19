
<script setup>
</script>

<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Hola soy <span class="text-one_red dark:one_red ">Karen Yulier Rodriguez</span>
   
      </h1>
      <h2 class="mb-4 text-2xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white escribir">Desarrolladora FullStack      <span class="cursor">|</span></h2>
      <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Mi enfoque es crear aplicaciones web
        atractivas y altamente intuitivas que resuelvan las necesidades de los
        usuarios. Estoy comprometida con el aprendizaje constante y la mejora
        continua en el apasionante mundo del desarrollo web.</p>
    </div>   
    
  </section>
</template>

<style scoped>

  .escribir {
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    width: 0;
    animation: escribiendo 3s steps(30) infinite;
  }

  .cursor {
    display: inline-block;
    vertical-align: text-bottom;
    animation: parpadeo 0.5s infinite;
  }

  @keyframes escribiendo {
    0% {
      width: 0;
    }
    100% {
      width: 22ch;;
    }
  }

  @keyframes parpadeo {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>