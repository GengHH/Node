<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <div h-full text-center flex select-none all:transition-4000>
      <div ma>
        <div text-5xl fw100 animate-bounce-alt animate-count-infinite animate-duration-1s>
          UnoCSS
        </div>
        <div op30 text-lg fw300 m1>The instant on-demand Atomic CSS engine.</div>
        <div m2 flex justify-center text-2xl op30 hover="op80">
          <a i-carbon-logo-github text-inherit href="https://github.com/unocss/unocss" target="_blank"></a>
        </div>
      </div>
    </div>
    <div bottom-50 right-100 left-0 text-center op30 fw300 rose500 bg-gray-200 gray100 color="orange">
      on-demand · instant · fully customizable
    </div>

    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <button bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600" text="sm white" font="mono light" p="y-2 x-4"
      border="2 rounded blue-200">
      Button
    </button>
  </div>

  <HelloWorld msg="Vite + Vue" />
</template>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
