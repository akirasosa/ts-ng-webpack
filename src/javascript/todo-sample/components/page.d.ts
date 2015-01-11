interface IPage<T> {
    content: T[];
    totalItems: number;
    itemsPerPage: number;
}
