<template lang="pug">
  .main-container.row.middle.center
    .group-buttons.column.middle.center
      span.group-button
        | Crear grupo
      span.group-button
        | Unirse a un grupo
    .group-feed.column.middle.center
      .group.column.middle.start
        h1.group-title.title-medium
          | Francia 2019
        .group-info.row.middle.space-between
          img.group-img(src="../assets/friends-group1.jpg" alt="travel group image")
          .friend-list.column.middle.start
            span.text-normal
              | • Juana
            span.text-normal
              | • Martina
            span.text-normal
              | • Rigoberta
          button.group-go-button
            | Ir
      .group.column.middle.start
        h1.group-title.title-medium
          | Camping humilde
        .group-info.row.middle.space-between
          img.group-img(src="../assets/friends-group2.jpg" alt="travel group image")
          .friend-list.column.middle.start
            span.text-normal
              | • Rubén
            span.text-normal
              | • Carlito
            span.text-normal
              | • Rigoberta
          button.group-go-button
            | Ir
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
@import '../scss/variables/sizes';
@import '../scss/variables/colors';

.main-container {
  height: calc(100vh - #{$navbar-height});
  min-height: 500px;
  padding: 0 50px;
}

.group-buttons {
  width: 100%;
  max-width: 400px;
}

.group-feed {
  border: 1px solid $black;
  padding: 0 20px;
  width: 100%;
  max-width: 600px;
}

.group {
  padding: 20px;
  border-bottom: 1px solid $black;
  width: 100%;
}

.group-title {
  margin-bottom: 30px;
}

.group-info {
  width: 100%;
}

.group-img {
  width: 100%;
  max-width: 300px;
  border-radius: 50%;
}
</style>
