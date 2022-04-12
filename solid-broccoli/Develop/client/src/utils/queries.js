import gql from "graphql-tag;"

export const GET_ME = gql`
{
me {
    _id
    username
    email
    bookCount
    savedBooks {
        bookId
        authors
        descripotion
        title
        image
        link
        }
        }       
    }
`;   