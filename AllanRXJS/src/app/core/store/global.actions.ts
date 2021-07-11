export namespace GlobalActions {

  export class SetError {
    static readonly type = '[ERROR] Error'
    constructor(public error: string) { }
  }

}
