import { HttpInterceptorFn } from "@angular/common/http";
import { environment } from "../../environments/environment.development";

export const coreInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.includes("i18n")) {
    return next(req);
  }

  const modifiedUrl = `${environment.baseUrl}${req.url}`;

  const clonedRequest = req.clone({
    url: modifiedUrl,
  });
  return next(clonedRequest);
};
