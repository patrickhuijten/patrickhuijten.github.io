<template>
  <footer>
    <div class="text-secondary text-center">
      <span>Patrick Huijten</span>
      <span>|</span>
      <span>psbheh@gmail.com</span>
    </div>
  </footer>
</template>
<style lang="scss" scoped>

footer {
 

  @include desktop-only() {
 position: fixed;
  bottom: 1rem;
  }
  margin-left: auto;
  margin-right: auto;
  left:0;
  right:0;
}
</style>