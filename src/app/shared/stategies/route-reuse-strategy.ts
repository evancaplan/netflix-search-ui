import {RouteReuseStrategy} from '@angular/router/';
import {ActivatedRouteSnapshot, DetachedRouteHandle} from '@angular/router';

export class CacheRouteReuseStrategy implements RouteReuseStrategy {
  storedRouteHandles = new Map<string, DetachedRouteHandle>();
  allowRetrieveCache = {'': true};

  shouldReuseRoute(before: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    this.allowRetrieveCache[''] = this.getPath(before) === 'details' && this.getPath(curr) === '/';
    return before.routeConfig === curr.routeConfig;
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    return this.storedRouteHandles.get(this.getPath(route)) as DetachedRouteHandle;
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    const path: string = this.getPath(route);
    if (path === '') {
      return this.storedRouteHandles.has(this.getPath(route));
    }

    return false;
  }

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    const path = this.getPath(route);
    return this.allowRetrieveCache.hasOwnProperty(path);

  }

  store(route: ActivatedRouteSnapshot, detachedTree: DetachedRouteHandle): void {
    this.storedRouteHandles.set(this.getPath(route), detachedTree);
  }

  private getPath(route: ActivatedRouteSnapshot): string {
    if (route.routeConfig !== null && route.routeConfig.path !== null) {
      return <string>route.routeConfig.path;
    }
    return '';
  }
}
