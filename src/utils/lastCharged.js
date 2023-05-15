import moment from "moment"

export const lastCharged = (number) =>{
// let num = Number(number)

return (
    moment(number).fromNow()
)

}