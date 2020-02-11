export class AddTaskCommand {
  constructor(
    public title: string,
    public urgent: boolean,
    public important: boolean,
    public userId: string
  ) {}
}
