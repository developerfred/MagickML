import { IRunContextEditor, MagickNode } from '../../../types'

function install(editor: IRunContextEditor) {
  editor.bind('delete')

  let currentNode: MagickNode | undefined

  editor.on('nodeselect', (node: MagickNode) => {
    if (currentNode && node.id === currentNode.id) return
    currentNode = node
  })

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  editor.on('delete', () => {
    if (!currentNode) return
    editor.removeNode(currentNode)
  })
}

const defaultExport = {
  name: 'keycodePlugin',
  install,
}

export default defaultExport
