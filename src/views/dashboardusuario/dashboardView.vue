<template>
    <main class="container-fluid">
       <header class="bg-success">
        <h5>Encabezado</h5>
       </header>
       <section class="d-flex">
          <article class="bg-info col-3">
            <SidebarComponent></SidebarComponent>
          </article>
          <article class="bg-warning col-9">
              <router-view/>
          </article>
       </section>
       <br>
       <footer class="bg-primary">
          <h5>Pie de pagina</h5>
       </footer>
    </main>
</template>

<script>
import SidebarComponent from '@/components/SidebarComponent.vue';

 export default{
    name: "dashboardView",
    components: { SidebarComponent }
}
</script>

<style scoped>
  
</style>