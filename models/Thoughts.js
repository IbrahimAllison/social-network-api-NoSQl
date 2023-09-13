const { Schema, model } = require('mongoose');
const reactionModelSchema = require('./Reactions');

const thoughtModelSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlenght: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionModelSchema],
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false,
    }
);

//THIS IS A VIRTUAL TO COUNT THE NUMBER OF REACTIONS
thoughtModelSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

//THIS IS A MODEL FOR THOUGHTS USING THE SCHEMA ABOVE
const Thought = model('Thought', thoughtModelSchema)

//EXPORT MODULE
module.exports = Thought