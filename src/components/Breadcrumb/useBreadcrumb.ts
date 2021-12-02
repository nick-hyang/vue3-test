import pathToRegexp from 'path-to-regexp'
import { RouteLocationMatched, useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

// function isDashboard(route_: RouteLocationMatched): boolean {
//     const name = route_ && route_.name
//     if (!name) {
//         return false
//     }
//     return (
//         (name as string).trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase()
//     )
// }

// export function getBreadcrumb(levelList: []) {
//     // only show routes with meta.title
//     let matched = route.matched.filter((item) => item.meta && item.meta.title)
//     const first = matched[0]

//     if (!isDashboard(first)) {
//         matched = [{ path: '/dashboard', meta: { title: 'Dashboard' } }].concat(matched)
//     }

//     levelList = matched.filter(
//         (item) => item.meta && item.meta.title && item.meta.breadcrumb !== false
//     )
// }

function pathCompile(path: string) {
    const { params } = route
    const toPath = pathToRegexp.compile(path)
    return toPath(params)
}

export function handleLink(item: RouteLocationMatched) {
    const { redirect, path } = item
    if (redirect) {
        router.push(redirect)
        return
    }
    router.push(pathCompile(path))
}
