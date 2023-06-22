import moment from "moment";
import Slots from "../../models/slots";
import BaseError from "../../error/baseError";
import { GeneralError } from "../../error/errorConstants";

const UserControllerService = {
    async getSingleCounselorAvailability(counselorID: any, date: string) {

        let serachDate = moment(date);

        let getCounselorSlots = await Slots.aggregate([
            {
                $match: {
                    counselor: counselorID,
                    slotDate: {
                        $gte: serachDate.startOf('day').toISOString(),
                        $lte: serachDate.endOf('day').toISOString()
                    }
                }
            }
        ]);

        if(!getCounselorSlots)
            throw new BaseError(GeneralError.NO_SLOT_AVAILABLE)

        

        
    },
    getAllCounselorAvailability() {

    },
}

export default UserControllerService;