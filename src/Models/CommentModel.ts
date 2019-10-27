export interface CommentModel {
    id: string,
    parentId: string
    author: string
    text: string
    createDate: string
    replies: CommentModel[]
}
