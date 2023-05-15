import moment from "moment"

export const convertTime = (time)=>{
   
      if(!time)return
      return moment(time).format(' MMM DD, YYYY. HH:mm a')
}