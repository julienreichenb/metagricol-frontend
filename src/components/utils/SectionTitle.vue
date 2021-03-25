<template>
  <div class="text-center py-2">
        <h2>
            <span class="section-title">
               {{ beforeTxt }} {{ $t(titleKey) }} {{ afterTxt }}
            </span>
        </h2>
  </div>
</template>

<script>
export default {
    name: 'SectionTitle',
    props: {
        titleKey: { type: String, required: true },
        beforeTxt: { type: String, required: false },
        afterTxt: { type: String, required: false },
    },
}
</script>

<style lang="scss" scoped>
h2 { 
    width: 100%; 
    text-align: center; 
    border-bottom: 1px solid theme-color-level('dark', -4); 
    line-height: .1em; 
    margin: 40px 0 30px;
} 
h2 .section-title { 
    background: #fff; 
    padding: 0 30px; 
}
</style>