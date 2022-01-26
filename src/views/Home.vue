<template>
  <div class="home">
    <page-title class="mb-5" titleKey="Methagricole" />
    <b-link class="btn btn-lg btn-outline-success" :to="$i18nRoute({ name: 'Dashboard' })">
      <font-awesome-icon class="mr-2" icon="map-marked" />
      Dashboard
    </b-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>
