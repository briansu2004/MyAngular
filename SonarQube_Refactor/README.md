# SQ - refactor this function to reduce its cognitive complexity from 368 to 15

Angular typescript

## Old code

```ts
export function getI18n(ts: TranslateService, i18nKey: string): string {
 return ts.instant(i18nKey);
}

export function getElectionsData(eleResp: InterfaceAPIGstElectionResponse, ts: TranslateService): any[] {
 let electionsData = [];
 
 if (eleResp) {
  if (!eleResp.gst20CurrentTCD && !eleResp.gst70CurrentFYEMMDD && !eleResp.gst71FutureStartDate && !eleResp.gst71FutureEndDate && !eleResp.rc4616ElectionExists && !eleResp.gst27Exists) {
   return electionsData;
  }

  const viewElections = getI18n(ts, 'viewElections');
  const prefixEffective = getI18n(ts, 'prefixEffective');
  const prefixFutureEffective = getI18n(ts, 'prefixFutureEffective');
  const prefixRevoked = getI18n(ts, 'prefixRevoked');
  const prefixFutureRevoked = getI18n(ts, 'prefixRevoked');
  
  let i = 3;
  
  // 1. GST20
  const titleGst20 = getI18n(ts, 'gst20');
  let gst20Value = valueDefault;
  if (eleResp.gst20 == '01') {
   gst20Value = getI18n(ts, 'gst20.monthly');
  } else if (eleResp.gst20 == '02') {
   gst20Value = getI18n(ts, 'gst20.quarterly');
  } else if (eleResp.gst20 == '03') {
   gst20Value = getI18n(ts, 'gst20.annual');
  }
  electionsData.push({ Index: 1, isHidden: false, isLink: false; Col1: titleGst20, text: gst20Value, textAfter: '', textBefore: '' });
  
  // 2. GST70
  const titleGst70 = getI18n(ts, 'gst70');
  let gst70Value = valueDefault;
  if (eleResp.gst70CurrentFYEMMDD && eleResp.gst70CurrentFYEMMDD.length == 4) {
   gst70Value = eleResp.gst70CurrentFYEMMDD.substring(0, 2) + '-' + eleResp.gst70CurrentFYEMMDD.substring(2, 4);
  }
  electionsData.push({ Index: 2, isHidden: false, isLink: false; Col1: titleGst70, text: gst70Value, textAfter: '', textBefore: '' });
  
  // 3. GST74
  if (eleResp.gst74EffectiveDate || eleResp.gst74ExpiryDate) {
   const titleGst74 = getI18n(ts, 'gst74');
   let gst74EffectiveValue = '';
   let gst74ExpiryValue = '';
   i++;
   if (eleResp.gst74EffectiveDate) {
    gst74EffectiveValue = prefixEffective + eleResp.gst74EffectiveDate  + '. ';
   }
   if (eleResp.gst74ExpiryDate) {
    gst74ExpiryValue = prefixRevoked + eleResp.gst74ExpiryDate + '. ';
   }
   electionsData.push({ Index: i, isHidden: false, isLink: false; Col1: titleGst74, text: gst74EffectiveValue + gst74ExpiryValue, textAfter: '', textBefore: '' });
  }
  
  // 4. rc4616
  if (eleResp.rc4616EffectiveDate || eleResp.rc4616ExpiryDate) {
   const titleRc4616 = getI18n(ts, 'rc4616');
   let rc4616EffectiveValue = '';
   let rc4616ExpiryValue = '';
   i++;
   if (eleResp.rc4616EffectiveDate) {
    rc4616EffectiveValue = prefixEffective + eleResp.rc4616EffectiveDate  + '. ';
   }
   if (eleResp.rc4616ExpiryDate) {
    rc4616ExpiryValue = prefixRevoked + eleResp.rc4616ExpiryDate + '. ';
   }
   electionsData.push({ Index: i, isHidden: false, isLink: false; Col1: titleRc4616, text: rc4616EffectiveValue + rc4616ExpiryValue, textAfter: '', textBefore: '' });
  }

  // 5. GST71
  if (eleResp.gst71FutureStartDate && eleResp.gst71FutureEndDate) {
   const titleGst71 = getI18n(ts, 'gst71');
   let gst71Value = eleResp.gst71FutureStartDate + '-' + eleResp.gst71FutureEndDate;
   i++;
   electionsData.push({ Index: i, isHidden: false, isLink: false; Col1: gst71Value, text: gst71Value, textAfter: '', textBefore: '' });
  }

  // 6. rc4530
  if (eleResp.rc4530CurrentEffectiveDate || eleResp.rc4530FutureEffectiveDate || eleResp.rc4530CurrentRevokeDate) {
   const titlerc4530 = getI18n(ts, 'rc4530');
   let rc4530CurrentEffectiveValue = '';
   let rc4530FutureEffectiveValue = '';
   let rc4530CurrentRevokeValue = '';
   i++;
   if (eleResp.rc4530CurrentEffectiveDate) {
    rc4530CurrentEffectiveValue = prefixEffective + eleResp.rc4530CurrentEffectiveDate  + '. ';
   }
   if (eleResp.rc4530FutureEffectiveDate) {
    rc4530FutureEffectiveValue = prefixFutureEffective + eleResp.rc4530FutureEffectiveDate + '. ';
   }
   if (eleResp.rc4530CurrentRevokeValue) {
    rc4530CurrentRevokeValue = prefixRevoked + eleResp.rc4530CurrentRevokeDate + '. ';
   }
   electionsData.push({ Index: i, isHidden: false, isLink: false; Col1: titlerc4530, text: rc4530CurrentEffectiveValue + rc4530FutureEffectiveValue + rc4530CurrentRevokeValue, textAfter: '', textBefore: '' });
  }
  
  // 7. RC4616
  if (eleResp.rc4616Exists) {
   const titleRc4616 = getI18n(ts, 'rc4616');
   let rc4616Value = eleResp.rc4616FutureStartDate + '-' + eleResp.rc4616FutureEndDate;
   i++;
   electionsData.push({ Index: i, isHidden: false, isLink: false; Col1: titleRc4616, text: viewElections, textAfter: '', textBefore: '' });
  }

  // 8. GST10
  if (eleResp.gst10CurrentEffectiveDate || eleResp.gst10FutureEffectiveDate || eleResp.gst10CurrentRevokeDate || eleResp.gst10FutureRevokeDate) {
   const titleGst10 = getI18n(ts, 'gst10');
   let gst10CurrentEffectiveValue = '';
   let gst10FutureEffectiveValue = '';
   let gst10CurrentRevokeValue = '';
   let gst10FutureRevokeValue = '';
   i++;
   if (eleResp.gst10CurrentEffectiveDate) {
    gst10CurrentEffectiveValue = prefixEffective + eleResp.gst10CurrentEffectiveDate  + '. ';
   }
   if (eleResp.gst10FutureEffectiveDate) {
    gst10FutureEffectiveValue = prefixFutureEffective + eleResp.gst10FutureEffectiveDate + '. ';
   }
   if (eleResp.gst10CurrentRevokeDate) {
    gst10CurrentRevokeValue = prefixRevoked + eleResp.gst10CurrentRevokeDate + '. ';
   }
   if (eleResp.gst10FutureRevokeDate) {
    gst10FutureRevokeValue = prefixFutureRevoked + eleResp.gst10FutureRevokeDate + '. ';
   }
   electionsData.push({ Index: i, isHidden: false, isLink: false; Col1: titleGst10, text: gst10CurrentEffectiveValue + gst10FutureEffectiveValue + gst10CurrentRevokeValue + gst10FutureRevokeValue, textAfter: '', textBefore: '' });
  }
  
  // 32. GST32
  if (eleResp.gst32CurrentEffectiveDate || eleResp.gst32FutureEffectiveDate || eleResp.gst32CurrentRevokeDate || eleResp.gst32FutureRevokeDate) {
   const titleGst32 = getI18n(ts, 'gst32');
   let gst32CurrentEffectiveValue = '';
   let gst32FutureEffectiveValue = '';
   let gst32CurrentRevokeValue = '';
   let gst32FutureRevokeValue = '';
   i++;
   if (eleResp.gst32CurrentEffectiveDate) {
    gst32CurrentEffectiveValue = prefixEffective + eleResp.gst32CurrentEffectiveDate  + '. ';
   }
   if (eleResp.gst32FutureEffectiveDate) {
    gst32FutureEffectiveValue = prefixFutureEffective + eleResp.gst32FutureEffectiveDate + '. ';
   }
   if (eleResp.gst32CurrentRevokeDate) {
    gst32CurrentRevokeValue = prefixRevoked + eleResp.gst32CurrentRevokeDate + '. ';
   }
   if (eleResp.gst32FutureRevokeDate) {
    gst32FutureRevokeValue = prefixFutureRevoked + eleResp.gst32FutureRevokeDate + '. ';
   }
   electionsData.push({ Index: i, isHidden: false, isLink: false; Col1: titleGst32, text: gst32CurrentEffectiveValue + gst32FutureEffectiveValue + gst32CurrentRevokeValue + gst32FutureRevokeValue, textAfter: '', textBefore: '' });
  }
  
  // 11. GST287
  if (eleResp.gst287CurrentEffectiveDate || eleResp.gst287FutureEffectiveDate || eleResp.gst287CurrentRevokeDate || eleResp.gst287FutureRevokeDate) {
   const titleGst287 = getI18n(ts, 'gst287');
   let gst287CurrentEffectiveValue = '';
   let gst287FutureEffectiveValue = '';
   let gst287CurrentRevokeValue = '';
   let gst287FutureRevokeValue = '';
   i++;
   if (eleResp.gst287CurrentEffectiveDate) {
    gst287CurrentEffectiveValue = prefixEffective + eleResp.gst287CurrentEffectiveDate  + '. ';
   }
   if (eleResp.gst287FutureEffectiveDate) {
    gst287FutureEffectiveValue = prefixFutureEffective + eleResp.gst287FutureEffectiveDate + '. ';
   }
   if (eleResp.gst287CurrentRevokeDate) {
    gst287CurrentRevokeValue = prefixRevoked + eleResp.gst287CurrentRevokeDate + '. ';
   }
   if (eleResp.gst287FutureRevokeDate) {
    gst287FutureRevokeValue = prefixFutureRevoked + eleResp.gst287FutureRevokeDate + '. ';
   }
   electionsData.push({ Index: i, isHidden: false, isLink: false; Col1: titleGst287, text: gst287CurrentEffectiveValue + gst287FutureEffectiveValue + gst287CurrentRevokeValue + gst287FutureRevokeValue, textAfter: '', textBefore: '' });
  }
  
  // 12. GST488
  if (eleResp.gst488CurrentEffectiveDate || eleResp.gst488FutureEffectiveDate || eleResp.gst488CurrentRevokeDate || eleResp.gst488FutureRevokeDate) {
   const titleGst488 = getI18n(ts, 'gst488');
   let gst488CurrentEffectiveValue = '';
   let gst488FutureEffectiveValue = '';
   let gst488CurrentRevokeValue = '';
   let gst488FutureRevokeValue = '';
   i++;
   if (eleResp.gst488CurrentEffectiveDate) {
    gst488CurrentEffectiveValue = prefixEffective + eleResp.gst488CurrentEffectiveDate  + '. ';
   }
   if (eleResp.gst488FutureEffectiveDate) {
    gst488FutureEffectiveValue = prefixFutureEffective + eleResp.gst488FutureEffectiveDate + '. ';
   }
   if (eleResp.gst488CurrentRevokeDate) {
    gst488CurrentRevokeValue = prefixRevoked + eleResp.gst488CurrentRevokeDate + '. ';
   }
   if (eleResp.gst488FutureRevokeDate) {
    gst488FutureRevokeValue = prefixFutureRevoked + eleResp.gst488FutureRevokeDate + '. ';
   }
   electionsData.push({ Index: i, isHidden: false, isLink: false; Col1: titleGst488, text: gst488CurrentEffectiveValue + gst488FutureEffectiveValue + gst488CurrentRevokeValue + gst488FutureRevokeValue, textAfter: '', textBefore: '' });
  }
```  

## New code (WIP)

```ts
// Constants
const prefixEffective = getI18n(ts, 'prefixEffective');
const prefixFutureEffective = getI18n(ts, 'prefixFutureEffective');
const prefixRevoked = getI18n(ts, 'prefixRevoked');
const prefixFutureRevoked = getI18n(ts, 'prefixFutureRevoked');

function formatDate(prefix: string, date: string): string {
  return date ? `${prefix}${date}. ` : '';
}

function createElectionData(index: number, title: string, values: string[]): void {
  const electionData = {
    Index: index,
    isHidden: false,
    isLink: false,
    Col1: title,
    text: values.join(''),
    textAfter: '',
    textBefore: '',
  };
  electionsData.push(electionData);
}

// Example usage
const titleGst74 = getI18n(ts, 'gst74');
const gst74EffectiveValue = formatDate(prefixEffective, eleResp.gst74EffectiveDate);
const gst74ExpiryValue = formatDate(prefixRevoked, eleResp.gst74ExpiryDate);
createElectionData(4, titleGst74, [gst74EffectiveValue, gst74ExpiryValue]);
```

and

```ts
interface ElectionField {
  title: string;
  datePrefix: string;
  dateKey: string;
  hasFutureDates?: boolean;
  hasRevokeDates?: boolean;
}

const electionFields: ElectionField[] = [
  { title: 'gst20', datePrefix: 'prefix', dateKey: 'gst20', hasFutureDates: false, hasRevokeDates: false },
  { title: 'gst70', datePrefix: 'prefix', dateKey: 'gst70CurrentFYEMMDD', hasFutureDates: false, hasRevokeDates: false },
  // Add more fields as needed
];

function formatDate(prefix: string, date: string): string {
  return date ? `${prefix}${date}. ` : '';
}

function createElectionData(index: number, field: ElectionField, eleResp: InterfaceAPIGstElectionResponse): void {
  const { title, datePrefix, dateKey, hasFutureDates, hasRevokeDates } = field;

  const dateValue = eleResp[dateKey];
  const futureDatesValue = hasFutureDates ? eleResp[`${title}FutureStartDate`] + '-' + eleResp[`${title}FutureEndDate`] : '';
  const revokeDatesValue = hasRevokeDates ? eleResp[`${title}FutureRevokeDate`] : '';

  const dateValueFormatted = formatDate(datePrefix, dateValue);
  const futureDatesFormatted = formatDate(prefixFutureEffective, futureDatesValue);
  const revokeDatesFormatted = formatDate(prefixFutureRevoked, revokeDatesValue);

  const values = [dateValueFormatted, futureDatesFormatted, revokeDatesFormatted].filter(Boolean);
  const electionData = {
    Index: index,
    isHidden: false,
    isLink: false,
    Col1: getI18n(ts, title),
    text: values.join(''),
    textAfter: '',
    textBefore: '',
  };
  electionsData.push(electionData);
}

// Example usage in a loop
for (let i = 0; i < electionFields.length; i++) {
  const field = electionFields[i];
  createElectionData(i + 1, field, eleResp);
}
```
