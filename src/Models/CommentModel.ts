export interface CommentModel {
    id: string,
    parentId: string
    depth: number
    author: string
    text: string
    createDate: string
    replies: CommentModel[]
}
