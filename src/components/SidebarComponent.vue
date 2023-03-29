<template>
    <main>
      <nav>
        <ul>
           <router-Link to="/verusuarios">Ver usuarios</router-Link>
           <br>
           <router-Link to="/crearusuarios">Crear usuarios</router-Link> 
            <li>actualizar usuarios</li>
            <li>configuracion</li>
            <li>salir</li>
        </ul>
      </nav>
    </main>
</template>

<script>
  export default{
      name:"SidebarComponent"
    }
</script>

<style scoped>

</style>