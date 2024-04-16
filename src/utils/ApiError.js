class ApiError extends Error{
    constructor(
        statCode,
        message="Something went wrong",
        errors=[],
        stack=""
    ){
        super(message)
        this.message=message
        this.statCode=statCode
        this.success=false
        this.data=null
        this.errors=errors
        if(stack){
            this.stack=stack
        }else{
            Error.captureStackTrace(this,this.constuctor)
        }
    }
}
export {ApiError}