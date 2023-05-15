import moment from "moment";

export const secondToHours = (time) =>{
    return moment.utc(time*1000).format('HH:mm:ss');
}