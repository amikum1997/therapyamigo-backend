import mongoose, { model, Model, Schema } from 'mongoose';
import assessmentRecordInterface from '../interface/models/assessmentResultModel';

const AssessmentRecordSchema = new Schema<assessmentRecordInterface>({
    assessment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Assessment',
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    score: [
        {
            _id: false,
            scoreType: {
                type: String
            },
            scoreValue: {
                type: Number
            }
        }
    ],
    result: [
        {
            _id: false,
            resultType: {
                type: String
            },
            resultValue: {
                type: String
            }
        }
    ],
    reply: [
        {
            _id: false,
            questionTitle: {
                type: String
            },
            option: {
                type: String
            },
            points: {
                type: String
            }
        }
    ],
}, {
    timestamps: true,
})

const AssessmentRecordschema: Model<assessmentRecordInterface> = model('AssessmentRecord', AssessmentRecordSchema)
export default AssessmentRecordschema;
