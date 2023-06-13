
export interface userModel {
    userName : string,
    userEmail : string,
    userPassword:string,
    countryCode : string,
    phoneNumber : string,
    regRefrence : string,
    userCorporateRefrence : any,
    userVendorRefrence : any,
    uniqueIdentifier:string,
    userProfilePicture : string,
    userRole : string,
    isCouple:boolean,
    coupleRefrence:any,
    currentCounselor:any,
    isActive : boolean,
    isVerified : boolean,
    isDualAuthenticationEnabled: boolean,
    totalBal : number,
    totalBalComsumed : number,
    isUserBanned:boolean,
    userCurrentPlan : any,
    selfHelpAccess : {
        plan : any,
        validity : Date,
    },
    chatAccess : {
        creditsLeft : Number,
        creditExpiry : Date
    }
}