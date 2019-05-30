<template>
<nuxt-child :projects="projects"/>
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
