export * from "./systems";

export interface HttpResponse<T> {
  statusCode: number;
  message: string;
  data: T;
}
