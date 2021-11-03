function createCache() {
    const data: IData = {}

    return {
        set(key: string, val: any) {
            data[key] = val
        },
        get(key: string): any {
            return data[key] ? data[key] : undefined
        }
    }
}

export {
    createCache
}
