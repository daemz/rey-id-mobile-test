import 'react-native';

import {
  concatenateSnakeCase,
  lowerCaseFirstChar,
  recursiveParse,
  removeUndefinedAttributes,
  replaceAllDuplicateLineBreaks,
} from 'utils/common';

const testObject = {
  testBoolean: false,
  testString: 'test',
};

it('removeUndefinedAttributes works well', () => {
  expect(
    removeUndefinedAttributes({
      color: undefined,
      fontSize: 12,
    }),
  ).toStrictEqual({
    fontSize: 12,
  });
  expect(
    removeUndefinedAttributes({
      color: 'red',
      fontSize: 12,
    }),
  ).toStrictEqual({
    color: 'red',
    fontSize: 12,
  });
});

it('replaceAll works well', () => {
  expect(replaceAllDuplicateLineBreaks('Test \\nUtil')).toStrictEqual(
    'Test \nUtil',
  );
  expect(replaceAllDuplicateLineBreaks('Test \\n\\nUtil')).toStrictEqual(
    'Test \n\nUtil',
  );
});

it('recursiveParse works well', () => {
  expect(recursiveParse(JSON.stringify(testObject))).toStrictEqual(testObject);
  expect(
    recursiveParse(JSON.stringify(JSON.stringify(testObject))),
  ).toStrictEqual(testObject);
  expect(recursiveParse('')).toStrictEqual('');
});

it('lowerCaseFirstChar works well', () => {
  expect(lowerCaseFirstChar('LoremIpsumDolorSitAmet')).toEqual(
    'loremIpsumDolorSitAmet',
  );
});

it('concatenateSnakeCase works well', () => {
  expect(concatenateSnakeCase('cash_on_delivery')).toEqual('cashOnDelivery');
  expect(concatenateSnakeCase('pickup_on_store')).toEqual('pickupOnStore');
});
