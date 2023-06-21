import mongoose, { model, Model, Schema } from 'mongoose';
import counselorInterface from '../interface/models/counselorModel';

const CounselorSchema = new Schema<counselorInterface>({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    councellorProfilePicture: {
        type: String,
    },
    counselorVideo: {
        type: String
    },
    slug: {
        type: String,
    },
    metaDescription: [{
        _id: false,
        name: {
            type: String
        },
        content: {
            type: String
        }
    }],
    educationalDegree: {
        type: String,
    },
    totalClient: {
        type: Number,
        default: 0
    },
    personality: {
        approch: {
            type: String
        },
        quote: {
            type: String
        },
        tags: [],
        thought: {
            type: String
        },
        choseCouncelling: {
            type: String
        },
        therapyStyle: {
            type: String
        },
        concern: {
            type: String
        },
        handel_stress: {
            type: String
        },
    },
    sessionType: [],
    language: [],
    counselorStatus: {
        type: String,
        enum: ['ON BOARDING', 'TRAINING', 'ACTIVE', 'NOTIC PERIOD', 'DEACTIVATED']
    },
    workEndDate: {
        type: String
    },
    isPartTimer: {
        type: Boolean,
        default: false
    },
    superviser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
}, {
    timestamps: true,
})

const Counselorschema: Model<counselorInterface> = model('Counselor', CounselorSchema)
export default Counselorschema;
