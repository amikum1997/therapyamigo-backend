import mongoose, { model, Model, Schema } from 'mongoose';
import assessmentInterface from '../interface/models/assessmentModel';

const AssessmentSchema = new Schema<assessmentInterface>({
    assessmentName: {
        type: String
    },
    assessmentDesc: {
        type: String
    },
    totalScore: {
        type: String
    },
    slug: {
        type: String
    },
    category: {
        type: String
    },
    subCategory: {
        type: String
    },
    issequenced: {
        type: Boolean,
        default: true
    },
    isMultipath: {
        type: Boolean,
        default: false
    },
    highScore: {
        type: String
    },
    mediumScore: {
        type: String
    },
    lowScore: {
        type: String
    },
    question: [
        {
            _id: false,
            questionOrder: {
                type: Number
            },
            question: {
                type: String
            },
            questionImage: {
                type: String
            },
            options: [
                {
                    _id: false,
                    optionOrder: {
                        type: Number
                    },
                    name: {
                        type: String
                    },
                    outputId: {
                        type: String
                    },
                    value: {
                        type: Number
                    },
                    image: {
                        type: String
                    }
                }
            ],
            inputs: {
                connectionId: {
                    type: String
                },
                connections: [
                    {
                        _id: false,
                        node: {
                            type: String
                        },
                        input: {
                            type: String
                        }
                    }
                ]
            },
            outputs: [
                {
                    _id: false,
                    connectionId: {
                        type: String
                    },
                    connections: {
                        node: {
                            type: String
                        },
                        output: {
                            type: String
                        }
                    }
                }
            ],
        }
    ],
    isPublic: {
        type: Boolean,
        default: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true,
})

const Assessmentschema: Model<assessmentInterface> = model('Assessment', AssessmentSchema)
export default Assessmentschema;
