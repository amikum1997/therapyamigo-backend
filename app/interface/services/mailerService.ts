export interface EmailBodyFormatI {
    from : string,
    to : string,
    subject : string,
    text ?: string,
    html ?: string
}
