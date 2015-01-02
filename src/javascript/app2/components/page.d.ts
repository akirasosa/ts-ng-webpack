interface IPage<T> {
    content: ng.IPromise<T[]>;
    totalItems: number;
    itemsPerPage: number;
}