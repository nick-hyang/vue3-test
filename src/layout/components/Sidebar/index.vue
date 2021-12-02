<template>
    <div>
        <el-scrollbar wrap-class="scrollbar-wrapper">
            <el-menu
                :collapse="isCollapse"
                background-color="#304156"
                text-color="#bfcbd9"
                :unique-opened="false"
                active-text-color="#409eff"
                :collapse-transition="false"
                mode="vertical"
            >
                <el-sub-menu index="1">
                    <template #title>
                        <span>one</span>
                    </template>
                </el-sub-menu>
                <el-sub-menu index="2">
                    <template #title>
                        <span>two</span>
                    </template>
                </el-sub-menu>
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useStore } from '@/store/index'

const isCollapse = ref(false)

const store = useStore()

watch(
    () => store.state.app.sidebar.opened,
    () => {
        isCollapse.value = !isCollapse.value
    }
)

// import { useRoute } from 'vue-router'
// import variables from '@/styles/variables.scss'

// const { meta, path } = useRoute()
// const activeMenu = computed(() => {
//     if (meta.activeMenu) {
//         return meta.activeMenu
//     }
//     return path
// })
</script>
