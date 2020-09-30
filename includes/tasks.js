
import * as tasksHandlers from './tasksHandlers'

export default  [

    {
        taskRule: {dayOfWeek: 0,hour: 17,minute: 19},
        taskHandler: tasksHandlers.sendJobAlerts,
       
    },
    // {
    //     taskSchedule: 'once every-monday of every-week @5:00:am ',
    //     taskHandler: taskHandlers.sendWeeklyJobAlerts,
    //     type: 'public'
    // },
    // {
    //     taskSchedule: 'once every-first-day of every-month @6:00:am',
    //     method: 'post',
    //     type: 'public'
    // },
    // {
    //     taskSchedule: 'twice every-month @6:30:am',
    //     method: 'GET',
    //     type: 'private'
    // }
   
]
