const useFileSystem = () => {
    let fileCount = 0

    const createNode = (node, parent = null) => {
        node.id = fileCount++
        node.parent = parent
        if (node.children) {
            node.children = node.children.map((child) => createNode(child, node))
        }
        return node
    }

    const root = createNode({
        children: [
            {
                name: 'Users',
                type: 'Folder',
                children: [
                    {
                        name: 'wesleygoyette',
                        type: 'Folder',
                        children: [
                            {
                                name: 'Documents',
                                type: 'Folder',
                                children: [
                                    { name: 'Resume.docx', type: 'File' },
                                    { name: 'ProjectProposal.pdf', type: 'File' },
                                    { name: 'Budget.xlsx', type: 'File' },
                                    { name: 'Notes.txt', type: 'File' }
                                ]
                            },
                            {
                                name: 'Pictures',
                                type: 'Folder',
                                children: [
                                    {
                                        name: 'Vacation',
                                        type: 'Folder',
                                        children: [
                                            { name: 'beach.png', type: 'File' },
                                            { name: 'mountains.jpg', type: 'File' },
                                            { name: 'cityscape.jpeg', type: 'File' }
                                        ]
                                    },
                                    { name: 'ProfilePhoto.png', type: 'File' }
                                ]
                            },
                            {
                                name: 'Downloads',
                                type: 'Folder',
                                children: [
                                    { name: 'Installer.exe', type: 'File' },
                                    { name: 'ResearchPaper.pdf', type: 'File' },
                                    { name: 'Compressed.zip', type: 'File' }
                                ]
                            },
                            {
                                name: 'Desktop',
                                type: 'Folder',
                                children: [
                                    { name: 'Shortcut.lnk', type: 'File' },
                                    { name: 'TodoList.txt', type: 'File' },
                                    { name: 'Report.docx', type: 'File' }
                                ]
                            },
                            {
                                name: 'Music',
                                type: 'Folder',
                                children: [
                                    { name: 'album.mp3', type: 'File' },
                                    { name: 'playlist.m3u', type: 'File' }
                                ]
                            },
                            {
                                name: 'AppData',
                                type: 'Folder',
                                children: [
                                    {
                                        name: 'Local',
                                        type: 'Folder',
                                        children: [
                                            {
                                                name: 'Temp',
                                                type: 'Folder',
                                                children: [{ name: 'cache.tmp', type: 'File' }]
                                            },
                                            {
                                                name: 'Programs',
                                                type: 'Folder',
                                                children: [{ name: 'myapp.dat', type: 'File' }]
                                            }
                                        ]
                                    },
                                    {
                                        name: 'Roaming',
                                        type: 'Folder',
                                        children: [
                                            { name: 'config.json', type: 'File' },
                                            { name: 'prefs.xml', type: 'File' }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Windows',
                type: 'Folder',
                children: [
                    {
                        name: 'System32',
                        type: 'Folder',
                        children: [
                            { name: 'kernel32.dll', type: 'File' },
                            { name: 'user32.dll', type: 'File' },
                            { name: 'cmd.exe', type: 'File' },
                            { name: 'explorer.exe', type: 'File' }
                        ]
                    },
                    {
                        name: 'Fonts',
                        type: 'Folder',
                        children: [
                            { name: 'arial.ttf', type: 'File' },
                            { name: 'calibri.ttf', type: 'File' },
                            { name: 'times.ttf', type: 'File' }
                        ]
                    },
                    {
                        name: 'Temp',
                        type: 'Folder',
                        children: [
                            { name: 'update.log', type: 'File' },
                            { name: 'error.log', type: 'File' }
                        ]
                    },
                    {
                        name: 'Web',
                        type: 'Folder',
                        children: [
                            {
                                name: 'wallpaper',
                                type: 'Folder',
                                children: [
                                    { name: 'default.jpg', type: 'File' },
                                    { name: 'theme.png', type: 'File' }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Program Files',
                type: 'Folder',
                children: [
                    {
                        name: 'Google',
                        type: 'Folder',
                        children: [
                            {
                                name: 'Chrome',
                                type: 'Folder',
                                children: [
                                    { name: 'chrome.exe', type: 'File' },
                                    {
                                        name: 'Desktop',
                                        type: 'Folder',
                                        children: [
                                            { name: 'todo.txt', type: 'File' },
                                            { name: 'Presentation.pptx', type: 'File' },
                                            { name: 'shortcut.lnk', type: 'File' }
                                        ]
                                    },
                                    {
                                        name: 'Music',
                                        type: 'Folder',
                                        children: [
                                            {
                                                name: 'Favorites',
                                                type: 'Folder',
                                                children: [
                                                    { name: 'song1.mp3', type: 'File' },
                                                    { name: 'song2.mp3', type: 'File' },
                                                    { name: 'song3.mp3', type: 'File' }
                                                ]
                                            },
                                            {
                                                name: 'Playlists',
                                                type: 'Folder',
                                                children: [
                                                    { name: 'workout.m3u', type: 'File' },
                                                    { name: 'chill.m3u', type: 'File' }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        name: 'Videos',
                                        type: 'Folder',
                                        children: [
                                            {
                                                name: 'Movies',
                                                type: 'Folder',
                                                children: [
                                                    { name: 'Inception.mp4', type: 'File' },
                                                    { name: 'Interstellar.mkv', type: 'File' },
                                                    { name: 'Matrix.mp4', type: 'File' }
                                                ]
                                            },
                                            {
                                                name: 'Tutorials',
                                                type: 'Folder',
                                                children: [
                                                    { name: 'JavaScriptBasics.mp4', type: 'File' },
                                                    { name: 'ReactGuide.mp4', type: 'File' }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        name: 'AppData',
                                        type: 'Folder',
                                        children: [
                                            {
                                                name: 'Local',
                                                type: 'Folder',
                                                children: [
                                                    {
                                                        name: 'Temp',
                                                        type: 'Folder',
                                                        children: [
                                                            { name: 'cache001.tmp', type: 'File' },
                                                            { name: 'cache002.tmp', type: 'File' }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                name: 'Roaming',
                                                type: 'Folder',
                                                children: [
                                                    {
                                                        name: 'SomeApp',
                                                        type: 'Folder',
                                                        children: [
                                                            { name: 'config.json', type: 'File' },
                                                            { name: 'data.db', type: 'File' }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                name: 'Public',
                                type: 'Folder',
                                children: [
                                    {
                                        name: 'Public Documents',
                                        type: 'Folder',
                                        children: [{ name: 'shared-note.docx', type: 'File' }]
                                    },
                                    { name: 'Public Downloads', type: 'Folder', children: [] }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'Windows',
                        type: 'Folder',
                        children: [
                            {
                                name: 'System32',
                                type: 'Folder',
                                children: [
                                    { name: 'cmd.exe', type: 'File' },
                                    { name: 'notepad.exe', type: 'File' },
                                    {
                                        name: 'drivers',
                                        type: 'Folder',
                                        children: [
                                            { name: 'network.sys', type: 'File' },
                                            { name: 'audio.sys', type: 'File' }
                                        ]
                                    }
                                ]
                            },
                            {
                                name: 'Fonts',
                                type: 'Folder',
                                children: [
                                    { name: 'Arial.ttf', type: 'File' },
                                    { name: 'TimesNewRoman.ttf', type: 'File' }
                                ]
                            },
                            {
                                name: 'Temp',
                                type: 'Folder',
                                children: [
                                    { name: 'update.log', type: 'File' },
                                    { name: 'install.log', type: 'File' }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'Program Files',
                        type: 'Folder',
                        children: [
                            {
                                name: 'Google',
                                type: 'Folder',
                                children: [
                                    {
                                        name: 'Chrome',
                                        type: 'Folder',
                                        children: [
                                            { name: 'chrome.exe', type: 'File' },
                                            { name: 'manifest.json', type: 'File' }
                                        ]
                                    }
                                ]
                            },
                            {
                                name: 'Microsoft Office',
                                type: 'Folder',
                                children: [
                                    { name: 'Word.exe', type: 'File' },
                                    { name: 'Excel.exe', type: 'File' }
                                ]
                            },
                            {
                                name: 'Common Files',
                                type: 'Folder',
                                children: [
                                    {
                                        name: 'Microsoft Shared',
                                        type: 'Folder',
                                        children: [
                                            {
                                                name: 'vsto',
                                                type: 'Folder',
                                                children: [{ name: 'vsto.log', type: 'File' }]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'PerfLogs',
                        type: 'Folder',
                        children: [
                            {
                                name: 'Admin',
                                type: 'Folder',
                                children: [{ name: '2024-08-19.log', type: 'File' }]
                            }
                        ]
                    },
                    {
                        name: 'ProgramData',
                        type: 'Folder',
                        children: [
                            {
                                name: 'Microsoft',
                                type: 'Folder',
                                children: [
                                    {
                                        name: 'Windows Defender',
                                        type: 'Folder',
                                        children: [
                                            {
                                                name: 'Definitions',
                                                type: 'Folder',
                                                children: [{ name: 'Update.log', type: 'File' }]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    })

    const findPath = (path, currNode = root) => {
        if (!path || !currNode) return null

        if (path == '/') return root

        if (path == '~') return findPath('/Users/wesleygoyette')

        if (path.startsWith('/')) {
            currNode = root
            path = path.slice(1)
        }

        const segments = path.split('/').filter((val) => val.length > 1)

        for (const segment of segments) {
            if (!segment || !currNode.children) return null

            const nextNode =
                segment == '..'
                    ? currNode.parent
                    : currNode.children.find((child) => child.name === segment)

            if (!nextNode) return null
            currNode = nextNode
        }

        return currNode
    }

    const getPath = (node) => {
        if (!node || !node.name) return '/'
        let nodeNameStack = [node.name]
        while (node.parent && node.parent.name) {
            node = node.parent
            nodeNameStack.push(node.name)
        }

        return '/' + nodeNameStack.reverse().join('/')
    }

    return {
        root,
        findPath,
        getPath
    }
}

export default useFileSystem
