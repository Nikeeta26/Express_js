class ExpressError extends Error {
  constructor(status, meassage){
    super();
    this.status=status;
    this.message=meassage;
  }
}

module.exports = ExpressError;
