import { Document, ObjectId } from "mongoose";

interface counselorInterface extends Document {
    user: ObjectId,
    councellorProfilePicture: string,
    counselorVideo: string,
    slug: string,
    metaDescription: [{
        name: string,
        content: string
    }],
    address:{
        country : string,
        state : string,
        city : string,
        address : string
    },
    educationalDegree: string,
    totalClient: number,
    personality: {
        approch: string,
        quote: string,
        tags: [string],
        thought: string,
        choseCouncelling: string,
        therapyStyle: string,
        concern: string,
        handel_stress: string,
    },
    sessionType: [string],
    language: [string],
    counselorStatus: string,
    workEndDate: string,
    isPartTimer: boolean,
    counselorVisibility: [string],
    superviser : ObjectId
}

export default counselorInterface;