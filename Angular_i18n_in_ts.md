# Angular i18n in ts

- [Basic example](#basic-example)
- [util.ts](#utilts)
- [Get values based on the locale](#get-values-based-on-the-locale)

## Basic example

It is easy and straightforward to use i18 keys in Angular html files.

But how to use it in ts files?

In your TypeScript files, you can use Angular's `TranslateService` to achieve language translation. Make sure you have injected `TranslateService` in your component or service constructor. Here's a basic example:

```typescript
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-your-component',
  templateUrl: './your-component.component.html',
  styleUrls: ['./your-component.component.css']
})
export class YourComponent {

  constructor(private translate: TranslateService) {
    // Set the default language
    this.translate.setDefaultLang('en');
  }

  switchLanguage(language: string): void {
    this.translate.use(language);
    // Your other logic when language changes, if needed
  }

  exampleMethod(): void {
    const translatedText = this.translate.instant('ba.title');
    console.log(translatedText);
  }
}
```

Ensure you have the `TranslateModule` configured in your `app.module.ts`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    // your components
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

This assumes you have a structure in your `assets` folder like `assets/i18n/en.json` and `assets/i18n/fr.json` containing your translations.

Remember to adjust the paths and configurations based on your project structure and needs.

## util.ts

To use `TranslateService` in your utility function (`util.ts`), you can pass it as a parameter to the function. Here's an example:

```typescript
import { TranslateService } from '@ngx-translate/core';

export function getData(translate: TranslateService): void {
  // Your utility function logic

  // Example usage of translation
  const translatedText = translate.instant('ba.title');
  console.log(translatedText);
}
```

Then, when you call this function from another component or service, make sure to pass the `TranslateService` instance to it:

```typescript
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { getData } from './path-to-your-utils/util';

@Component({
  selector: 'app-your-component',
  templateUrl: './your-component.component.html',
  styleUrls: ['./your-component.component.css']
})
export class YourComponent {

  constructor(private translate: TranslateService) {
    // Set the default language
    this.translate.setDefaultLang('en');
  }

  callUtilFunction(): void {
    // Pass the TranslateService instance to your utility function
    getData(this.translate);
  }
}
```

By passing the `TranslateService` as a parameter, you can use it within your utility function as needed. Make sure to import the necessary modules and configure your translations in your Angular application as mentioned in the previous response.

## Get values based on the locale

Yes, you can retrieve the translations for a specific key in both English and French using the `TranslateService` in your TypeScript file. Here's an example:

```typescript
import { TranslateService } from '@ngx-translate/core';

export class YourComponent {

  constructor(private translate: TranslateService) {
    // Set the default language
    this.translate.setDefaultLang('en');
  }

  getTranslationForKey(key: string): { en: string, fr: string } {
    const englishValue = this.translate.instant(key, 'en');
    const frenchValue = this.translate.instant(key, 'fr');

    return { en: englishValue, fr: frenchValue };
  }

  exampleMethod(): void {
    const translation = this.getTranslationForKey('ba.title');
    console.log('English:', translation.en);
    console.log('French:', translation.fr);
  }
}
```

In this example, the `getTranslationForKey` function takes a translation key as a parameter and returns an object with English and French translations. The `translate.instant` method is used with the language code ('en' or 'fr') to get the specific translation for that language.

Make sure your translations are properly configured in your Angular application, and the language codes match those used in your translation files (e.g., 'en.json' and 'fr.json'). Adjust the code accordingly based on your project structure and requirements.
