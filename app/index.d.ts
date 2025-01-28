type NotNull<T> = Exclude<T, undefined | null>;
type Nullable<T> = T | undefined | null;
