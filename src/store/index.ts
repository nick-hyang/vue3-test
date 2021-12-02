import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import BaseStateTypes, { AllStateTypes } from './types'

import AppModule from './modules/app'

export const key: InjectionKey<Store<BaseStateTypes>> = Symbol('vue-store')

export const store = createStore<BaseStateTypes>({
    modules: {
        app: AppModule
    }
})

// 引用的地方不用再导入key，可以直接得到 const store = useStore()了
export function useStore<T = AllStateTypes>() {
    return baseUseStore<T>(key)
}
