<template>
  <footer>
    <slot/>
    <div class="text-secondary text-center grid grid-auto-column fr-1 grid-gap-2">
      <span>Patrick Huijten</span>
      <span>psbheh@gmail.com</span>
    </div>
  </footer>
</template>
<style scoped>
footer {
  margin-left: auto;
  margin-right: auto;
  height: 20px;

  bottom: 0;
  display: grid;
  justify-content: center;
}
</style>