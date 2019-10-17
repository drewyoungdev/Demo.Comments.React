export interface CommentModel {
    id: string,
    depth: number
    author: string
    text: string
    replies: CommentModel[]
}
