import {
  MsalInterceptorConfiguration,
  MsalGuardConfiguration,
} from '@azure/msal-angular';
import {
  IPublicClientApplication,
  PublicClientApplication,
  BrowserCacheLocation,
  InteractionType,
  LogLevel,
} from '@azure/msal-browser';

import { environment } from 'src/environments/environment';
import { isIE } from '../constants';

export function loggerCallback(logLevel: LogLevel, message: string) {
  console.log(message);
}

/** Don't change this configurations
 * * Here we pass the configuration parameters to create an MSAL instance.
 * * For more info,
 * * visit: https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-angular/docs/v2-docs/configuration.md */
export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: environment.credentials.clientId,
      authority:
        'https://login.microsoftonline.com/' + environment.credentials.tenantId,
      redirectUri: environment.configuration.redirectUri,
    },
    cache: {
      cacheLocation: BrowserCacheLocation.LocalStorage,
      storeAuthStateInCookie: isIE, // set to true for IE 11
    },
    system: {
      loggerOptions: {
        loggerCallback,
        logLevel: LogLevel.Error,
        piiLoggingEnabled: false,
      },
    },
  });
}

/**
 * Don't change this configurations
 * MSAL Angular will automatically retrieve tokens for resources
 * added to protectedResourceMap. For more info, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/
 * msal-angular/docs/v2-docs/initialization.md#get-tokens-for-web-api-calls
 */
export function MSALInterceptorConfigFactory(): MsalInterceptorConfiguration {
  const protectedResourceMap = new Map<string, Array<string>>();

  protectedResourceMap.set(
    environment.resources.Graph.resourceUri,
    environment.resources.Graph.resourceScopes
  );
  return {
    interactionType: InteractionType.Redirect,
    protectedResourceMap,
  };
}

/**
 * Don't change this configurations
 * Set your default interaction type for MSALGuard here. If you have any
 * additional scopes you want the user to consent upon login, add them here as well.
 */
export function MSALGuardConfigFactory(): MsalGuardConfiguration {
  return { interactionType: InteractionType.Redirect };
}
