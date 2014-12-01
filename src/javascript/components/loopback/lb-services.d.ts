/// <reference path="../../../../typings/angularjs/angular-resource.d.ts"/>

declare module lb {
    interface IResource<T> {
        find(): ng.resource.IResource<T[]>;
        create(resource: T): ng.resource.IResource<T>;
        deleteById(resource: T): ng.resource.IResource<T>;
        destroyAll(where: any): ng.resource.IResource<void>;
    }
}
