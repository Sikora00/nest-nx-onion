export interface JsonFilesPersistence {
  getFileData<T extends Object>(): Promise<T>;

  save(data: any): Promise<void>;
}
