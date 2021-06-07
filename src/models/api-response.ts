export interface ApiResponse<T> {
  data: T | undefined;
  hasError: boolean;
  isLoading: boolean;
}
