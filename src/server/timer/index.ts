import timer from 'node-schedule'
export const TIMER = (fn:any) =>{
    timer.scheduleJob('10 * * * * *',()=>{
        fn()
    })
}