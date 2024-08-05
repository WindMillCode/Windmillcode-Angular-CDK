export class SingletonError extends Error {
  constructor(message?) {
    super(message ?? "It seems that you are trying to perform an action which is only meant to happen once, if this is a class instance there should be only one class instance in the app");
    this.name = this.constructor.name;
  }
}

export class WMLAPIError {
  constructor(props:Partial<WMLAPIError>={}){
    Object.assign(
      this,
      {
        ...props
      }
    )
  }
  statusCode = 500
  msg="The application is having an issue as of right now please try again later or contact support if the issue persists"
}
