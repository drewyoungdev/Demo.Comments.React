export interface CommentModel {
    id: string,
    depth: number
    replies: CommentModel[]
}
