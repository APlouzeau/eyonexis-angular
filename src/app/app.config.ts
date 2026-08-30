import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { routes } from './app-desktop.routes';
import { provideHttpClient, withXhr } from '@angular/common/http';
import { provideMarkdown } from 'ngx-markdown';

registerLocaleData(localeFr, 'fr');

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withXhr()),
    { provide: LOCALE_ID, useValue: 'fr' },
    provideMarkdown(),
  ],
};
