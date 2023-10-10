export const logActivator = function(message=""){

    let initializationLogging = process.env.SHOW_ANZII_INITIALIZATIONS || false
    let shouldLog = initializationLogging ? true : false
    if(!shouldLog) return 
     console.log(`Initializing Anzii: ${message}`)

}