import { Document, ObjectId } from "mongoose";

interface appointmentFeedbackInterface extends Document {
    user: ObjectId,
    counselor: ObjectId,
    appointment: ObjectId,
    counselorRating: number,
    counselorReview: string,
    operationalRating: string,
    opertionalReview: string,
    connectivityRating: number,
    connectivityReview: string,
    otherIssues: string,
    overallRating: number,
    isCompleted: boolean,
}

export default appointmentFeedbackInterface;