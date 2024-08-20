const useFileSystem = () => {
    let fileCount = 0

    const root = {}

    const getParent = (root = root, targetName) => {
        if (!root || !root.children) return null

        for (const child of root.children) {
            if (child.name === targetName) {
                return root
            }

            const parent = getParent(child, targetName)
            if (parent) return parent
        }

        return null
    }

    const createNode = (node) => {
        node.id = fileCount++
        return node
    }

    return {
        root,
        getParent
    }
}

export default useFileSystem
