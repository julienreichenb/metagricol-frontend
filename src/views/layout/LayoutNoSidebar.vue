<template>
    <div>
        <Navbar />
        <div>
            <b-container>
                <router-view class="content" />
            </b-container>
            <Footer />
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
export default {
    name: 'LayoutNoSidebar',
    components: {
        Navbar,
        Footer,
    },
}
</script>

<style>

</style>