interface ITodo extends ng.resource.IResource<ITodo> {
    id: number;
    title: string;
    done: boolean;
}
