import { Document, ObjectId } from "mongoose";

interface assessmentInterface extends Document {
    assessmentName: string,
    assessmentDesc : string,
    totalScore : string,
    slug : string,
    category: string,
    subCategory: string,
    issequenced : boolean,
    isMultipath : boolean,
    highScore : string,
    mediumScore : string,
    lowScore : string,
    question: [
        {
            questionOrder : number,
            question: string,
            questionImage : string,
            options : [
                {
                    optionOrder : number,
                    name : string,
                    outputId: string,
                    value: number,
                    image: string
                }
            ],
            inputs : {
                connectionId : string,
                connections : [
                    {
                        node : string,
                        input : string  
                    }
                ]
            },
            outputs : [
                {
                    _id: false,
                    connectionId : string,
                    connections : {
                        node : string,
                        output : string
                    }
                }
            ],
        }
    ],
    isPublic : boolean
    createdBy : ObjectId
}

export default assessmentInterface;