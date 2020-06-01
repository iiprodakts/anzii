


export const init = function(){
  
  
  this.log('Kronjo has been initialised') 
  this.listens({
    
  'config-kronjo': this.handleConfigKronjo.bind(this),
  'handle-kronjo-task': this.handleKronjoTask.bind(this),
  'start-single-process-tasks': this.handleSingleProcessTasks.bind(this)
	// 'task-run': this.handleTaskRun.bind(this)
  
  })

	
}

export const handleConfigKronjo = function(krons){

    const self = this 
    const pao = self.pao 
    const unikify = pao.pa_unikify

     self.krons = unikify(self.krons.concat(krons))

    // krons.forEach((task,i)=>{
      
    //   self.scheduleTask(task)
      
    // })


}

export const handleSingleProcessTasks = function(){

  const self = this 

  self.krons.forEach((task,i)=>{
    
    self.scheduleTask(task)
    
  })


}


export const handleKronjoTask = function(data){

	
	const self = this 

     data.forEach((task,i)=>{
     	
       self.scheduleTask(task)
       
     })


} 


export const scheduleTask = function(task){
	
	
	const self = this 
	let pao = self.pao
  const {taskRule,taskHandler} = task 
  self.log('THE TASK')
  self.log(task)
  self.log(taskHandler)

  let scheduler = self.taskr.scheduleJob(taskRule,taskHandler.bind(self))

}