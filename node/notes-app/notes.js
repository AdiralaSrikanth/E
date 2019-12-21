

const getNotes = function(){
    return "Your notes..."
}

module.exports = getNotes

db.createCollection('posts', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['title', 'text', 'creator', 'comments'],
            properties: {
                title: {
                    bsonType: 'string',
                    description: "title should be string and required"
                },
                text: {
                    bsonType: 'string',
                    description: "body should be string and required"
                },
                creator : {
                    bsonType: 'objectId',
                    description: 'id of the user of this post'
                }, 
                comments : {
                    bsonType: 'array',
                    description: 'must be an array and is required',
                    items: {
                        bsonType: 'object',
                        required: ['text', 'author'],
                        properties: {
                            text: {
                                bsonType: 'string',
                                description: 'comment should be a string and is required'
                            },
                            author: {
                                bsonType: 'objectId',
                                description: 'must be an id'
                            }
                        }
                    }
                    
                }
                
            }
        }
    }})