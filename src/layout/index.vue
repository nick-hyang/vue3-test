<template>
    <el-container class="app-container">
        <el-aside :width="sideWidth + 'px'" v-show="showAside">
            <sider-bar></sider-bar>
        </el-aside>

        <el-container>
            <el-header style="text-align: right; font-size: 12px">
                <navbar></navbar>
            </el-header>

            <el-main>
                <router-view></router-view>
            </el-main>

            <el-footer></el-footer>
        </el-container>
    </el-container>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import Navbar from './components/Navbar.vue'
import SiderBar from './components/Sidebar/index.vue'
import { useStore } from '../store/index'

const store = useStore()
const sideWidth = ref(210)

watch(
    () => store.state.app.sidebar.opened,
    (newValue) => {
        sideWidth.value = newValue ? 210 : 64
    }
)

// const { text } = store.state

const showAside = ref(true)
</script>

<style lang="scss" scoped>
.app-container {
    height: 100%;
    width: 100%;
    padding: 0px;
    margin: 0px;
    border: 0px;
}

.el-header {
    --el-header-padding: 0px;
    --el-header-height: 50px;
}

aside {
    padding: 0px;
    margin: 0px;
}
</style>
