<template>
<div>
<nuxt-child :projects="projects" :key="$route.params.slug"/>
</div>
</template>
<script>
export default {
    computed:{
        projects(){
            return this.$store.getters.GetProjects;
        }
    },
    mounted(){
        this.$store.dispatch('LoadProjects')
    }
}
</script>
