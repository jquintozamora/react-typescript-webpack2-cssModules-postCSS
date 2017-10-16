declare var global: any
export const raf = global.requestAnimationFrame = (cb: any) => {
    setTimeout(cb, 0)
}
