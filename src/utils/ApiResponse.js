class ApiResponse {
    constructor(
        statCode,data,message="Success"
    ){
        this.statusCode=statCode
        this.data=data
        this.message=message
        this.success=statCode<400
    }
}