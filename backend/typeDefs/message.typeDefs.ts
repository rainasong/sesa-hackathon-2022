import { gql } from "apollo-server";

export const messageTypeDef = gql`

type Message {
    _id: ID
    name: String
    content: String
    likes: Int
    isLiked: Boolean
    replies: [String]
    replyTo: String
    createdAt: String
}

input MessageInput {
    name: String
    content: String
}

input MessageLikesInput {
    likes: Int
    isLiked: Boolean
}

input MessageReplyInput {
    replyTo: ID!
    name: String
    content: String
    isTopic: Boolean
}

type Query {
    messages: [Message]
    topicMessages: [Message]
    getReplies(ID: ID!, isTopic: Boolean): [Message]
    getName(ID: ID!, isTopic: Boolean): String
}

type Mutation {
    createMessage(messageInput: MessageInput): Message!
    setLikes(ID: ID!, likesInput: MessageLikesInput): Message!
    createTopicMessage(topicMessageInput: MessageInput): Message!
    setTopicLikes(ID: ID!, likesInput: MessageLikesInput): Message!
    createReply(replyInput: MessageReplyInput): Message!
}
`