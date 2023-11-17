export * from "./entities";

export interface HttpResponse<T> {
  statusCode: number;
  message: string;
  data: T;
}
